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
          <div>
            <span class="card-title mb-8">{{ menuItemData.name }}</span>
            <p
              v-if="menuItemData.description"
              class="text-base-content text-opacity-40"
            >
              {{ menuItemData.description }}
            </p>
          </div>
          <div class="flex flex-1 justify-end">
            <div class="flex flex-col items-center gap-4">
              <div
                v-if="menuItemData.price"
                class="card-title badge badge-xs badge-outline p-2 w-20"
              >
                {{ menuItemData.price }} {{ menuItemData.currency }}
              </div>
              <div class="flex flex-col items-center gap-1 md:flex-row">
                <slot name="actions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  menuItemData: {
    type: Object,
    required: true,
  },
})

const menuItemImage = computed(() => {
  const { image } = props.menuItemData
  if (!image)
    return false
  return `https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${image}`
})
</script>
