<template>
  <div class="card shadow-lg compact side bg-base-100 my-4">
    <div class="flex-row items-center card-body">
      <div class="flex-1">
        <div class="flex gap-4 items-center">
          <div class="avatar">
            <div
              v-if="menuItemImage"
              class="rounded-btn w-16 h-16 mask mask-squircle"
            >
              <img
                :src="menuItemImage"
              >
            </div>
          </div>
          <div class="flex flex-col items-left">
            <span class="card-title">{{ menuItemData.name }}</span>
            <p
              v-if="menuItemData.description"
              class="text-base-content text-opacity-40"
            >
              {{ menuItemData.description }}
            </p>
            <div class="flex items-center gap-3 mt-2">
              <slot name="basket">
                <div class="inline-block bg-secondary text-secondary-content rounded-lg flex items-center hover:bg-base-200 hover:text-base-content hover:cursor-pointer transition delay-20" @click="addToBasket">
                  <carbon-add class="w-8 h-5" />
                </div>
              </slot>
              <div
                v-if="menuItemData.price "
                class="font-bold w-16 bg-primary rounded-box text-primary-content text-md text-center"
              >
                <slot name="price">
                  {{ menuItemData.price }}
                </slot>
                {{ getCurrency(menuItemData).symbol }}
              </div>
            </div>
          </div>
          <div class="flex flex-1 justify-end">
            <div class="flex flex-col items-center gap-1 md:flex-row">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCurrency } from '~/composables'
import { useBasketStore } from '~/stores/basket'
const props = defineProps({
  menuItemData: {
    type: Object,
    required: true,
  },
})

const { getCurrency } = useCurrency()
const basket = useBasketStore()
const menuItemImage = computed(() => {
  const { images } = props.menuItemData
  const image = images && images.length ? images[0] : null
  if (!image)
    return false
  return `https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${image}`
})

const addToBasket = () => {
  basket.addToBasket(props.menuItemData)
}

</script>
