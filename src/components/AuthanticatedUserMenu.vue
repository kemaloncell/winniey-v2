<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'
import BusinessSettings from '~/pages/admin/menu/modals/BusinessSettings.vue'

const auth = useAuthStore()
const router = useRouter()

const showMenu = ref(false)
const showBusinessSettings = ref(false)
const onClickUserButton = () => {
  showMenu.value = !showMenu.value
}

const onClickBusinessSettings = () => {
  showBusinessSettings.value = !showBusinessSettings.value
}

const onLogout = () => {
  auth.logout()
}

const onShowBusinessClose = () => {
  showBusinessSettings.value = false
}

const onClickLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <div
      v-if="auth.isAuthenticated"
      class="avatar cursor-pointer"
      @click="onClickUserButton"
    >
      <div class="btn btn-circle p-3">
        <carbon-study-next class="inline-block" />
        </div>
      <ul
        v-if="showMenu"
        class="menu p-4 shadow-lg bg-base-200 rounded-box absolute right-0 mt-15 z-10"
      >
        <li>
          <a>
            {{ auth.currentUser.attributes.email }}
          </a>
        </li>
        <li @click="onClickBusinessSettings">
          <a> Ayarlar </a>
        </li>
        <li @click="onLogout">
          <a> Çıkış Yap </a>
        </li>
      </ul>
    </div>
    <div v-else class="flex items-stretch" @click="onClickLogin">
      <a class="btn btn-ghost btn-sm rounded-btn"> Giriş Yap </a>
    </div>
    <business-settings :business-info="auth.currentBusiness" :show="showBusinessSettings" @close="onShowBusinessClose" />
  </div>
</template>
