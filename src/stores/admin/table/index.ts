import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { tableService } from '~/../api/tableService'
export const useAdminTables = defineStore({
  id: 'adminTables',

  state: () => ({
    tables: [],
    menus: [],
    filteredMenu: [],
    selectedMenu: null,
    businessInfo: null,
  }),
  getters: {
    getTables: state => state.tables,
  },
  actions: {
    async fetchTables() {
      NProgress.start()
      const route = useRoute()
      const { businessUsername } = route.params
      const tables = await tableService.getTables(businessUsername)

      console.log(tables)
      NProgress.done()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminTables, import.meta.hot))
