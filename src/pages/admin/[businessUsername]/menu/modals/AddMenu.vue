<template>
  <global-modal :show="show">
    <template #header>
      Menü Ekle
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Menü Adı</span>
        </label>
        <input
          v-model="menuName"
          type="text"
          placeholder="Menü adı giriniz. Örneğin: Türkçe"
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
        Kaydet
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAdminMenu2 } from '~/stores/admin/menu'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu2()
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
