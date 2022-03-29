<template>
  <div>
    <menu-item
      v-for="basketItem in getBasket"
      :key="basketItem.id"
      :menu-item-data="basketItem"
    >
      <template #basket>
        <div
          v-if="basketItem.quantity"
          class="inline-block bg-red-500/90 rounded-lg flex items-center hover:bg-base-200 hover:cursor-pointer transition delay-20"
          @click="removeToBasket(basketItem)"
        >
          <carbon-trash-can class="w-8 h-5" />
        </div>
        <span v-if="basketItem.quantity>0">{{ basketItem.quantity }}</span>

        <div
          class="inline-block bg-primary rounded-lg flex items-center hover:bg-base-200 hover:cursor-pointer transition delay-20" @click="addToBasket(basketItem)"
        >
          <carbon-add class="w-8 h-5" />
        </div>
      </template>
      <template #price>
        {{ basketItem.totalPrice }}
      </template>
    </menu-item>
  </div>
</template>

<script setup>
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
