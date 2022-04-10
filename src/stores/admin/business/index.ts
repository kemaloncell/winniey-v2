import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { businessService } from '~/../api'

export const useAdminBusiness = defineStore({
  id: 'adminBusiness',

  state: () => ({
    business: {},
  }),
  getters: {
    getBusiness: state => state.business,
  },
  actions: {
    async fetchBusiness() {
      NProgress.start()
      const route = useRoute()

      const { businessUsername } = route.params
      this.business = await businessService.getByUsername(businessUsername)

      NProgress.done()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminBusiness, import.meta.hot))
