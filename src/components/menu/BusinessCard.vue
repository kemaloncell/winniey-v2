<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
const userMenu = useUserMenu()
const businessInfo = computed(() => userMenu.getBusinessInfo)
const selectedMenu = computed(() => userMenu.getSelectedMenu || {})
</script>
<template>
  <div class="card shadow-lg bordered compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div>
        <div class="mask mask-squircle">
          <div class="rounded-full w-14 h-14 shadow" v-if="businessInfo.logo">
            <img :src="businessInfo.logo">
          </div>
        </div>
      </div>
      <div>
        <h2 class="card-title" v-if="businessInfo.name">
          {{ businessInfo.name }}
        </h2>
      </div>
    </div>
    <div class="card-body ml-2 custom-description">
      <div class="flex flex-col gap-2" >
        <p class="mt-0 mb-1 mx-2" v-if="selectedMenu.description">
          {{ selectedMenu.description }}
        </p>
        <p class="flex items-center" v-if="businessInfo.wifi">
          <carbon-wifi class="w-8 h-5 inline " />
          <span class="mx-2">{{businessInfo.wifi}}</span>
        </p>
        <p class="flex items-center" v-if="businessInfo.phone">
          <carbon-phone class="w-8 h-5 inline" />
          <span class="mx-2 ">{{businessInfo.phone}}</span>
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
