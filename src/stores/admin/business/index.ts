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
      if (!this.business?.id) {
        NProgress.start()

        const route = useRoute()

        const { businessUsername } = route.params
        const { data } = await businessService.getByUsername(businessUsername)

        this.business = data;

        NProgress.done()

        return this.business
      }
      return this.business
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminBusiness, import.meta.hot))
