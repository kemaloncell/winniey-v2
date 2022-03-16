<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
const userMenu = useUserMenu()
const businessInfo = computed(() => userMenu.getBusinessInfo)
const selectedMenu = computed(() => userMenu.getSelectedMenu || {})

const businessLogo = computed(() => {
  const { logo } = businessInfo.value
  if (!logo)
    return false

  return `https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${logo}`
})
</script>
<template>
  <div class="card shadow-lg bordered compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div>
        <div class="mask mask-squircle">
          <div v-if="businessLogo" class="rounded-full w-14 h-14 shadow">
            <img :src="businessLogo">
          </div>
        </div>
      </div>
      <div>
        <h2 v-if="businessInfo.name" class="card-title">
          {{ businessInfo.name }}
        </h2>
      </div>
    </div>
    <div class="card-body ml-2 custom-description">
      <div class="flex flex-col gap-2">
        <p v-if="selectedMenu.description" class="mt-0 mb-1 mx-2">
          {{ selectedMenu.description }}
        </p>
        <p v-if="businessInfo.wifi" class="flex items-center">
          <carbon-wifi class="w-8 h-5 inline " />
          <span class="mx-2">{{ businessInfo.wifi }}</span>
        </p>
        <p v-if="businessInfo.phone" class="flex items-center">
          <carbon-phone class="w-8 h-5 inline" />
          <span class="mx-2 ">{{ businessInfo.phone }}</span>
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
