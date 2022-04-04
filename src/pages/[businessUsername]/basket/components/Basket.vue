<template>
  <div v-if="getBasket.length" class="bg-base-200 rounded-box p-4 ">
    <menu-item
      v-for="basketItem in getBasket"
      :key="basketItem.id"
      :menu-item-data="basketItem"
    >
      <template #basket>
        <div
          class="inline-block bg-error text-primary-content rounded-lg flex items-center hover:bg-base-200 hover:cursor-pointer transition delay-20"
          @click="removeToBasket(basketItem)"
        >
          <carbon-trash-can class="w-8 h-5" />
        </div>
        <span>{{ basketItem.quantity }}</span>

        <div
          class="inline-block bg-success text-primary-content rounded-lg flex items-center hover:bg-base-200 hover:cursor-pointer transition delay-20" @click="addToBasket(basketItem)"
        >
          <carbon-add class="w-8 h-5" />
        </div>
      </template>
      <template #price>
        {{ basketItem.totalPrice }}
      </template>
    </menu-item>
    <BasketAmount  />
  </div>
  <div v-else class="bg-base-200 rounded-box p-4 ">
    <span class="flex justify-center text-lg">sepetinizde ürün bulunmamaktadır.</span>
  </div>
</template>

<script setup>
import BasketAmount from './BasketAmount.vue'
import { useBasketStore } from '~/stores/basket'

const basket = useBasketStore()
const getBasket = computed(() => basket.getBasket)
const addToBasket = (basketItem) => {
  basket.addToBasket(basketItem)
}
const removeToBasket = (basketItem) => {
  basket.removeFromBasket(basketItem)
}
</script>
