<template>
    <section id="bottom-navigation" class=" h-26  fixed inset-x-0 bottom-16  bg-base-200 shadow-2xl">
      <div class="card-body">
        <div class=" flex justify-between">
          <span class="text-lg">Sepet Tutarı: {{ getTotalPrice }} TL</span>
          <button @click="onClickOrder" class="btn btn-md btn-primary">
            Sipariş ver
          </button>
        </div>
      </div>
    </section>
</template>
<script setup>
import { useBasketStore } from '~/stores/basket'

const basket = useBasketStore()
const getTotalPrice = computed(() => basket.getTotalPrice)
const onClickOrder = () => {
  basket.createOrder()
}

</script>
