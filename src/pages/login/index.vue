<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const user = useAuthStore()
const router = useRouter()

if (user.currentUser?.username)
  router.push('/')

const emit = defineEmits()

const loginUser = ref({
  email: '',
  password: '',
})
const loading: boolean = ref(false)
const showConfirmation: boolean = ref(false)
const login = async() => {
  loading.value = true
  const { email, password } = loginUser.value
  const status = await user.login(email, password)
  loading.value = false

  if (status === 'UserNotConfirmedException')
    showConfirmation.value = true
  else if (status === true)
    router.push('/admin/menu')
}

const emailConfirmed = () => {
  showConfirmation.value = false
  console.log('Your email has been confirmed. Please login again.')
}
</script>
<template>
  <div class="card flex-shrink-0 w-full shadow-2xl bg-base-200">
    <div v-if="!showConfirmation" class="flex flex-col items-center">
      <div class="font-bold mt-4">
        Winnie'ye Giriş Yap
      </div>
      <div class="font-light text-sm">
        Bir hesap oluşturmak mı istiyorsunuz?
        <router-link to="/register" class="text-blue-500 hover:underline">
          Kayıt olun
        </router-link>
      </div>
    </div>
    <auth-confirmation
      v-if="showConfirmation"
      :email="loginUser.email"
      @emailConfirmed="emailConfirmed"
    />
    <div v-else class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">E-posta</span>
        </label>
        <input
          v-model="loginUser.email"
          type="text"
          placeholder="E-posta"
          class="input input-bordered"
          @keyup.enter="login"
        >
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Şifre</span>
        </label>
        <input
          v-model="loginUser.password"
          type="password"
          placeholder="Şifre"
          class="input input-bordered"
          @keyup.enter="login"
        >
        <label class="label">
          <a href="#" class="label-text-alt">Şifremi unuttum</a>
        </label>
      </div>
      <div class="form-control mt-6">
        <input
          type="button"
          value="Giriş Yap"
          class="btn btn-primary"
          :disabled="loading"
          @click="login"
        >
      </div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>
