import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { menuService } from '~/../api/menuService'

export const useUserMenu2 = defineStore({
  id: 'userMenu2',
  state: () => ({
    menu: {},
    menus: [],
    filteredMenu: [],
    selectedMenu: null,
    businessInfo: null,
  }),
  getters: {
    getMenu: state => state.menu,
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
      NProgress.done()
      return this.menu
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserMenu2, import.meta.hot))
