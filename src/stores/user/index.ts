import { acceptHMRUpdate, defineStore } from 'pinia'
import { DataStore, SortDirection } from '@aws-amplify/datastore'
import NProgress from 'nprogress'
import { Business, Menu, MenuCategory, MenuItem } from '~/models'

export const useUserMenu = defineStore({
  id: 'userMenu',

  state: () => ({
    menu: [],
    menus: [],
    filteredMenu: [],
    selectedMenu: null,
    businessInfo: null,
  }),
  getters: {
    getMenu: state =>
      state.filteredMenu.length > 0 ? state.filteredMenu : state.menu,
    getFilteredMenu: state => state.filteredMenu,
    getMenus: state => state.menus,
    getSelectedMenu: state => state.selectedMenu,
    getBusinessInfo: state => state.businessInfo,
  },
  actions: {
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
