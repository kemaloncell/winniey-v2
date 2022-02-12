<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const user = useAuthStore()
const router = useRouter()
const emit = defineEmits()

if (user.currentUser?.username)
  router.push('/')

const loading: boolean = ref(false)
const showConfirmation: boolean = ref(false)
const signUpUser = ref({
  email: '',
  password: '',
})

const signUp = async() => {
  loading.value = true
  const { email, password } = signUpUser.value
  const isRegistered = await user.signUp(email, password)
  loading.value = false

  if (isRegistered)
    showConfirmation.value = true
}

const emailConfirmed = () => {
  showConfirmation.value = false
  console.log('Your email has been confirmed. Please login again.')
}

</script>
<template>
  <div class="card flex-shrink-0 w-full shadow-2xl bg-base-200">
    <div class="flex flex-col items-center">
      <div class="font-bold mt-4">
        Kayıt Ol
      </div>
      <div class="font-light text-sm">
        Zaten bir hesabınız var mı?
        <router-link to="/login" class="text-blue-500 hover:underline">
          Giriş yapın
        </router-link>
      </div>
    </div>
    <auth-confirmation v-if="showConfirmation" :email="signUpUser.email" @emailConfirmed="emailConfirmed" />
    <div v-else class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">E-posta</span>
        </label>
        <input v-model="signUpUser.email" type="text" placeholder="E-posta" class="input input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Şifre</span>
        </label>
        <input v-model="signUpUser.password" type="password" placeholder="Şifre" class="input input-bordered">
      </div>
      <div class="form-control mt-6">
        <input type="button" value="Kayıt Ol" class="btn btn-primary" :disabled="loading" @click="signUp">
      </div>
    </div>
  </div>
</template>
