<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
import { useAuthStore } from '~/stores/auth'

let timeOut = null
const emit = defineEmits()
const userMenu = useUserMenu()
const auth = useAuthStore()
const router = useRouter()

const businessInfo = computed(() => userMenu.getBusinessInfo)
const isLiked = computed(() => userMenu.getIsBusinessLiked)
const selectedMenu = computed(() => userMenu.getSelectedMenu || {})
const isLikeBusiness = ref(false)
const likeCount = ref(0)

const businessLogo = computed(() => {
  const { logo } = businessInfo.value
  if (!logo)
    return false

  return `https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${logo}`
})

watchEffect(() => {
  if (isLiked.value)
    isLikeBusiness.value = isLiked.value
  likeCount.value = businessInfo.value.likeCount
})

const onLike = () => {
  const userName = auth.currentUserUsername
  if (!userName) {
    router.push('/register')
    return
  }

  isLikeBusiness.value = !isLikeBusiness.value
  likeCount.value = isLikeBusiness.value ? likeCount.value + 1 : likeCount.value - 1
  clearTimeout(timeOut)
  timeOut = setTimeout(async() => {
    emit('like', {
      status: isLikeBusiness.value,
      likeCount: likeCount.value,
    })
  }, 500)
}

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
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <p v-if="businessInfo.wifi" class="flex items-center">
              <carbon-wifi class="w-8 h-5 inline " />
              <span class="mx-2">{{ businessInfo.wifi }}</span>
            </p>
            <p v-if="businessInfo.phone" class="flex items-center">
              <carbon-phone class="w-8 h-5 inline" />
              <span class="mx-2 ">{{ businessInfo.phone }}</span>
            </p>
          </div>
          <div
            class="mr-2 flex items-center gap-1"
          >
            <button
              class="btn btn-circle border-0 bg-transparent hover:bg-primary"
              :class="{ 'text-secondary-focus b': isLikeBusiness }"
              @click="onLike"
            >
              <carbon-favorite v-if="!isLikeBusiness" class="inline-block" />
              <carbon-favorite-filled v-else class="inline-block" />
            </button>
            <span>{{ likeCount }}</span>
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
