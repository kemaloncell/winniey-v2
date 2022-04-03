<template>
  <global-modal :show="show">
    <template #header>
      Görünüm Ayarları
    </template>
    <template #body>
      <div class="form-control">
        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Ana Renk</span>
          </label>
          <div class="flex items-center gap-2">
            <input
              v-model="businessInfo.themeSettings"
              type="text"
              placeholder="Ana Renk"
              class="flex-1 input input-bordered"
            >
            <div>
              kırmızı
            </div>
          </div>
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
      <input
        ref="menuImageFileInput"
        class="hidden"
        type="file"
        accept="image/png, image/jpg"
        @change="onFileSelected"
      >
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useAdminMenu } from '~/stores/admin'

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
const menu = useAdminMenu()

watchEffect(() => {
  businessInfo.value = JSON.parse(JSON.stringify(props.businessInfo))
})

const updateBusiness = async() => {
  isSaveButtonDisabled.value = true
  console.log('themes')
  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}

</script>
