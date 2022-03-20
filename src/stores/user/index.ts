import { acceptHMRUpdate, defineStore } from 'pinia'
import { DataStore, SortDirection } from '@aws-amplify/datastore'
import NProgress from 'nprogress'
import { Business, BusinessLike, Menu, MenuCategory, MenuItem } from '~/models'
import { useAuthStore } from '~/stores/auth/'
export const useUserMenu = defineStore({
  id: 'userMenu',

  state: () => ({
    menu: [],
    menus: [],
    filteredMenu: [],
    selectedMenu: null,
    businessInfo: null,
    isBusinessLiked: false,
  }),
  getters: {
    getMenu: state =>
      state.filteredMenu.length > 0 ? state.filteredMenu : state.menu,
    getFilteredMenu: state => state.filteredMenu,
    getMenus: state => state.menus,
    getSelectedMenu: state => state.selectedMenu,
    getBusinessInfo: state => state.businessInfo,
    getIsBusinessLiked: state => state.isBusinessLiked,
  },
  actions: {
    async likeBusiness(payload) {
      const { userId, businessId, status, likeCount } = payload

      const currentBusinessLike = await DataStore.query(BusinessLike, business =>
        business.userID('eq', userId).businessID('eq', businessId),
      )

      const currentStatus = (currentBusinessLike.length && currentBusinessLike[0]?.status) ? !currentBusinessLike[0].status : true
      if (currentStatus !== status)
        return

      if (!currentBusinessLike.length) {
        await DataStore.save(
          new BusinessLike({
            businessID: businessId,
            userID: userId,
            status: currentStatus,
          }),
        )
      }
      else {
        const original = await DataStore.query(BusinessLike, currentBusinessLike[0].id)
        await DataStore.save(
          BusinessLike.copyOf(original, (updated) => {
            updated.status = currentStatus
          }),
        )
      }

      const original = await DataStore.query(Business, businessId)
      const newLikeCount = currentStatus ? original.likeCount + 1 : original.likeCount - 1
      if (newLikeCount !== likeCount) return
      const businessResult = await DataStore.save(
        Business.copyOf(original, (updated) => {
          updated.likeCount = newLikeCount
        }),
      )
    },
    search(searchText) {
      const query = searchText.trim().toLowerCase()
      if (!query || query.length < 2) {
        this.filteredMenu = []
        return
      }

      const filteredMenu = []

      this.menu.forEach((menuCategory) => {
        const filteredItems = menuCategory.items.filter((item) => {
          return (
            item.name.toLowerCase().includes(query)
                        || item.description.toLowerCase().includes(query)
          )
        })

        if (filteredItems.length > 0) {
          filteredMenu.push({
            category: menuCategory.category,
            items: filteredItems,
          })
        }
      })

      this.filteredMenu = filteredMenu
    },
    setSelectedMenu(menuID) {
      this.selectedMenu = this.menus.find(menu => menu.id === menuID)
    },
    async fetchMenu(payload) {
      const menu = []

      if (!payload || !payload?.businessUsername)
        return

      NProgress.start()
      const { businessUsername } = payload

      let currentBusiness
      currentBusiness = await DataStore.query(Business, business =>
        business.username('eq', businessUsername),
      )

      this.businessInfo = currentBusiness[0]
      const businessID = currentBusiness[0].id

      // const menu = useMenu()
      // await menu.fetchMenu(businessID)
      if (!businessID) {
        NProgress.done()
        return
      }
      const userAuth = useAuthStore()
      const userId = userAuth.currentUser?.getUsername()

      if (userId) {
        const businessLiked = await DataStore.query(BusinessLike, business =>
          business.userID('eq', userId).businessID('eq', businessID),
        )
        this.isBusinessLiked = !!((businessLiked.length && businessLiked[0]?.status))
      }

      const menus = await DataStore.query(Menu, menuItem =>
        menuItem.businessID('eq', businessID),
      )

      this.menus = JSON.parse(JSON.stringify(menus))

      if (!this.selectedMenu)
        this.setSelectedMenu(menus[0]?.id)

      const selectedMenu = this.selectedMenu || menus[0] || null

      if (selectedMenu) {
        const menuCategories = await DataStore.query(
          MenuCategory,
          category => category.menuID('eq', selectedMenu.id),
          {
            sort: s => s.createdAt(SortDirection.ASCENDING),
          },
        )

        for (const category of menuCategories) {
          const menuItems = await DataStore.query(
            MenuItem,
            menuItem => menuItem.menucategoryID('eq', category.id),
            {
              sort: s => s.createdAt(SortDirection.ASCENDING),
            },
          )

          menu.push({
            category,
            items: menuItems,
          })
        }

        this.$patch((state) => {
          state.menu = JSON.parse(JSON.stringify(menu))
        })

        NProgress.done()
        return this.menu
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserMenu, import.meta.hot))
