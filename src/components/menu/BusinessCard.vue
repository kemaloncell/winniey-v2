<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
import { useUserMenu2 } from '~/stores/user/menu'
import { useAuthStore } from '~/stores/auth'

let timeOut = null
const emit = defineEmits()
const userMenu = useUserMenu()
const userMenu2 = useUserMenu2()
const auth = useAuthStore()
const router = useRouter()

const businessInfo = computed(() => userMenu.getBusinessInfo)
const businessInfo2 = computed(() => userMenu2.getBusinessInfo)

const selectedMenu = computed(() => userMenu.getSelectedMenu || {})

const businessLogo = computed(() => {
  const { logo } = businessInfo2.value
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
        <h2 v-if="businessInfo2.name" class="card-title">
          {{ businessInfo2.name }}
        </h2>
      </div>
    </div>
    <div class="card-body ml-2 custom-description">
      <div class="flex flex-col gap-2">
        <p v-if="selectedMenu.description" class="mt-0 mb-1 mx-2">
          {{ selectedMenu.description }}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <p v-if="businessInfo2.wifi" class="flex items-center">
              <carbon-wifi class="w-8 h-5 inline " />
              <span class="mx-2">{{ businessInfo2.wifi }}</span>
            </p>
            <p v-if="businessInfo2.phone" class="flex items-center">
              <carbon-phone class="w-8 h-5 inline" />
              <span class="mx-2 ">{{ businessInfo2.phone }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-description {
  padding: 0.25rem 1rem 1rem 0.5rem !important;
}
</style>
