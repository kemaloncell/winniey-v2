<template>
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
        level="H"
        :value="qrLink"
        :size="qrSize"
      />
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

const qrLink = ref('https://peraantakya.winniey.com')
const qrSize = ref(300)
</script>
<route lang="yaml">
meta:
  layout: admin
</route>
