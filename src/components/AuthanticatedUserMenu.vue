<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const showMenu = ref(false)

const onClickUserButton = () => {
  showMenu.value = !showMenu.value
}

const onLogout = () => {
  auth.logout()
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
        <!-- <img src="https://i.pravatar.cc/500?img=32" /> -->
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
        <li @click="onLogout">
          <a> Çıkış Yap </a>
        </li>
      </ul>
    </div>
    <div v-else class="flex items-stretch" @click="onClickLogin">
      <a class="btn btn-ghost btn-sm rounded-btn"> Giriş Yap </a>
    </div>
  </div>
</template>
