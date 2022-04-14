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
    async addTable(payload) {
      NProgress.start()

      const { data } = await tableService.create(payload)
      this.tables.push(data)

      NProgress.done()
    },
    async updateTable(payload) {
      NProgress.start()
      const { id, update } = payload
      const { data } = await tableService.update(id, update)
      const index = this.tables.findIndex(table => table.id === data.id)
      this.tables.splice(index, 1, data)

      NProgress.done()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminTables, import.meta.hot))
