<template>
  <global-modal :show="show">
    <template #header>
      {{ table.tableName }}
    </template>
    <template #body>
      <div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">URL</span>
          </label>
          <input
            v-model="qrLink"
            disabled
            type="text"
            class="input input-bordered"
          >
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">QR Kod Boyutu</span>
          </label>
          <input
            v-model="qrSize"
            type="range"
            min="100"
            max="500"
            class="range range-primary"
          >
        </div>
        <div class="flex justify-center mt-8">
          <qrcode-vue
            class="bg-base-200 p-8 rounded-box"
            :value="qrLink"
            :size="qrSize"
          />
        </div>
      </div>
    </template>
    <template #action>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { useAdminBusiness } from '~/stores/admin/business'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  table: {
    type: Object,
    required: true,
  },
})

const adminBusiness = useAdminBusiness()
const emit = defineEmits()
const qrLink = ref('https://winniey.com')
const qrSize = ref(300)

watchEffect(() => {
  if (props.show)
    qrLink.value = `https://winniey.com/${adminBusiness.getBusiness.username}?table=${props.table.id}`
})

const onClose = () => {
  emit('close')
}
</script>
