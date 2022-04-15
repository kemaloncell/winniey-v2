import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { orderService } from '~/../api/orderService'

export const useAdminOrders = defineStore({
  id: 'adminOrders',
  state: () => ({
    orders: [],
  }),
  getters: {
    getOrders: state => state.orders,
  },
  actions: {
    async fetchOrders() {
      NProgress.start()

      const { data } = await orderService.getOrderList()
      this.orders = data

      NProgress.done()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminOrders, import.meta.hot))
