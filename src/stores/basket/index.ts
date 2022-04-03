import { acceptHMRUpdate, defineStore } from 'pinia'
// import { orderService } from '../../../api/orderService.js'
export const useBasketStore = defineStore({
  id: 'useBasketStore',

  state: () => ({
    basket: [],
  }),
  getters: {
    getBasket: state =>
      state.basket,

    getTotalPrice: state =>
      state.basket.reduce((total, item) => total + item.totalPrice, 0),
  },
  actions: {
    async createOrder() {
      const basketData = this.basket.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
        }
      })
      const payload = {
        items: basketData,
        tableId: 1,
        businessId: 1,
      }
      /* try {
        await orderService.create(payload);
      }
      catch (e) {
        console.log(e);
      } */
    },

    addToBasket(menuItem) {
      const item = this.basket.find(item => item.id === menuItem.id)
      if (item) {
        item.quantity++
        item.totalPrice = item.quantity * item.price
      }
      else {
        this.basket.push({
          ...menuItem,
          quantity: 1,
          totalPrice: menuItem.price,
        })
      }
    },
    removeFromBasket(menuItem) {
      const item = this.basket.find(item => item.id === menuItem.id)
      if (item.quantity > 1) {
        item.quantity--
        item.totalPrice = item.quantity * item.price
      }
      else {
        this.basket.splice(this.basket.indexOf(item), 1)
      }
    },
    clearBasket(state) {
      state.basket = []
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBasketStore, import.meta.hot))
