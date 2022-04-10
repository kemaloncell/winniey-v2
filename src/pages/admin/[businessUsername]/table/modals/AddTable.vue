<template>
  <global-modal :show="show">
    <template #header>
      Masa Ekle
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Menü Adı</span>
        </label>
        <input
          v-model="menuName"
          type="text"
          placeholder="Masa adı giriniz. Örneğin: Masa-1"
          class="input input-bordered"
        >
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="addMenu"
      >
        Ekle
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAdminMenu } from '~/stores/admin'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu()
const menuName = ref('')
const isSaveButtonDisabled = ref(false)

const addMenu = async() => {
  isSaveButtonDisabled.value = true
  await adminMenu.addMenu({
    name: menuName.value,
  })
  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
