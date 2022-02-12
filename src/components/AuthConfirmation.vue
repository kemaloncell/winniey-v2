<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const user = useAuthStore()
const emit = defineEmits()
const props = defineProps({
  email: {
    type: String,
    required: true,
  },
})

const loading: boolean = ref(false)
const emailConfirmationCode: string = ref('')

const confirmEmail = async() => {
  loading.value = true
  const isConfirmed = await user.confirmEmail(
    props.email,
    emailConfirmationCode.value,
  )
  if (isConfirmed)
    emit('emailConfirmed')

  loading.value = false
}
</script>
<template>
  <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
    <div class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Confirmation Code</span>
        </label>
        <input
          v-model="emailConfirmationCode"
          type="text"
          placeholder="code"
          class="input input-bordered"
        >
      </div>
      <div class="form-control mt-6">
        <input
          type="button"
          value="Confirm"
          class="btn btn-primary"
          :disabled="loading"
          @click="confirmEmail"
        >
      </div>
    </div>
  </div>
</template>
