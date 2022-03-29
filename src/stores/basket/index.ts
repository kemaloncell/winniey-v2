import { acceptHMRUpdate, defineStore } from 'pinia'
export const useBasketStore = defineStore({
  id: 'useBasketStore',

  state: () => ({
    basket: [],

  }),
  getters: {
    getBasket: state =>
      state.basket,
  },
  actions: {
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
      if (item.quantity > 1)
        item.quantity--
      else
        this.basket.splice(this.basket.indexOf(item), 1)
    },
    clearBasket(state) {
      state.basket = []
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBasketStore, import.meta.hot))
