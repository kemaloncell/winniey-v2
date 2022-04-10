import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { tableService } from '~/../api/tableService'
import { useAdminBusiness } from '~/stores/admin/business'

export const useAdminTables = defineStore({
  id: 'adminTables',

  state: () => ({
    tables: [],
  }),
  getters: {
    getTables: state => state.tables,
  },
  actions: {
    async fetchTables() {
      NProgress.start()

      const businessStore = useAdminBusiness()
      const businessInfo = await businessStore.fetchBusiness()

      const { data } = await tableService.getTables(businessInfo.id)
      this.tables = data

      NProgress.done()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminTables, import.meta.hot))
