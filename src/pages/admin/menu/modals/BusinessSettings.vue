<template>
  <global-modal :show="show">
    <template #header>
      İşetme Ayarları
    </template>
    <template #body>
      <div class="form-control">
        <div v-if="businessInfo.name" class="form-control mt-4">
          <label class="label">
            <span class="label-text">İşletme Adı</span>
          </label>
          <input
            v-model="businessInfo.name"
            type="text"
            placeholder="İşletme Adı"
            class="input input-bordered"
          >
        </div>
        <div v-if="businessInfo.phone" class="form-control mt-4">
          <label class="label">
            <span class="label-text">Telefon Numarası</span>
          </label>
          <input
            v-model="businessInfo.phone"
            type="text"
            placeholder="İşletme Telefon numarası."
            class="input input-bordered"
          >
        </div>

        <div v-if="businessInfo.wifi" class="form-control mt-4">
          <label class="label">
            <span class="label-text">Wifi Şifresi</span>
          </label>
          <input
            v-model="businessInfo.wifi"
            type="text"
            placeholder="İşletme Wifi şifresi."
            class="input input-bordered"
          >
        </div>
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="updateBusiness"
      >
        Kaydet
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  businessInfo: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits()
const isSaveButtonDisabled = ref(false)
const businessInfo = ref({})
const auth = useAuthStore()

watchEffect(() => {
  businessInfo.value = JSON.parse(JSON.stringify(props.businessInfo))
})

const updateBusiness = async() => {
  isSaveButtonDisabled.value = true
  await auth.updateBusiness({
    businessInfo: businessInfo.value,
    update: {
      name: businessInfo.value.name,
      phone: businessInfo.value.phone,
      wifi: businessInfo.value.wifi,
    },
  })

  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}

</script>
