<script setup>
const props = defineProps({
  businessInfo: {
    type: Object,
    required: true,
  },
})

const isDescriptionShow = computed(() => {
  return props.businessInfo.description || props.businessInfo.phone
})
const isLogoShow = computed(() => {
  return props.businessInfo.logo
})
</script>
<template>
  <div class="card shadow-lg bordered compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div v-if="isLogoShow">
        <div class="mask mask-squircle">
          <div class="rounded-full w-14 h-14 shadow">
            <img :src="props.businessInfo.logo">
          </div>
        </div>
      </div>
      <div>
        <h2 class="card-title">
          {{ props.businessInfo.name }}
        </h2>
      </div>
    </div>
    <div v-if="isDescriptionShow" class="card-body ml-2 custom-description">
      <div class="flex flex-col gap-2">
        <p v-if="props.businessInfo.description" class="mt-0 mb-1 mx-2">
          {{ props.businessInfo.description }}
        </p>
        <p v-if="props.businessInfo.wifi" class="flex items-center">
          <carbon-wifi class="w-8 h-5 inline " />
          <span class="mx-2">{{ props.businessInfo.wifi }}</span>
        </p>
        <p v-if="props.businessInfo.phone" class="flex items-center">
          <carbon-phone class="w-8 h-5 inline" />
          <span class="mx-2 ">{{ props.businessInfo.phone }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-description {
  padding: 0.25rem 1rem 1rem 0.5rem !important;
}
</style>
