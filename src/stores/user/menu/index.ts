import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { menuService } from '~/../api/menuService'

export const useUserMenu2 = defineStore({
  id: 'userMenu2',
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
    async fetchAllInfo(payload) {
      if (!payload || !payload?.businessUsername)
        return

      NProgress.start()
      const { businessUsername } = payload
      const allInfo = await menuService.getAll(businessUsername)
      const { menu, menus, business } = allInfo.data
      this.menu = menu.Categories
      this.menus = menus
      this.businessInfo = business

      const { themeSettings } = business
      if (themeSettings && themeSettings.default && !localStorage.getItem('theme')) {
        localStorage.setItem('theme', themeSettings.default)
        document.getElementsByTagName('html')[0].setAttribute('data-theme', themeSettings.default)
      }

      NProgress.done()
      return this.menu
    },
    search(searchText) {
      const query = searchText.trim().toLowerCase()
      if (!query || query.length < 2) {
        this.filteredMenu = []
        return
      }

      const filteredMenu = []

      this.menu.forEach((menuCategory) => {
        const filteredItems = menuCategory.Items.filter((item) => {
          return (
            item.name.toLowerCase().includes(query)
          )
        })

        if (filteredItems.length > 0) {
          filteredMenu.push({
            ...menuCategory,
            Items: filteredItems,
          })
        }
      })

      this.filteredMenu = filteredMenu
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserMenu2, import.meta.hot))
