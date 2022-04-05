<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
import { useUserMenu2 } from '~/stores/user/menu'
import { useAuthStore } from '~/stores/auth'

const timeOut = null
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

const businessWifi = computed(() => {
  const { additionalInfo } = businessInfo2.value
  const { wifi } = additionalInfo
  return wifi
})

const businessPhone = computed(() => {
  const { additionalInfo } = businessInfo2.value
  const { phone } = additionalInfo
  return phone
})

const businessDescription = computed(() => {
  const { desc } = businessInfo2.value
  return desc
})

</script>
<template>
  <div class="card shadow-lg bordered compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div>
        <div class="mask mask-squircle">
          <div v-if="businessLogo" class="rounded-full w-14 h-14 shadow">
            <img class="h-full w-full" :src="businessLogo">
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
        <p v-if="businessDescription" class="mt-0 mb-1 mx-2">
          {{ businessDescription }}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <p v-if="businessWifi" class="flex items-center">
              <carbon-wifi class="w-8 h-5 inline " />
              <span class="mx-2">{{ businessWifi }}</span>
            </p>
            <p v-if="businessPhone" class="flex items-center">
              <carbon-phone class="w-8 h-5 inline" />
              <span class="mx-2 ">{{ businessPhone }}</span>
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
