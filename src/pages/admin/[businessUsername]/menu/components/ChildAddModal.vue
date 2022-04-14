<template>
  <global-modal :show="show">
    <template #header>
      İçerik Ekle
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">İçerik Adı</span>
        </label>
        <input
          v-model="menuItemName"
          type="text"
          class="input input-bordered"
          placeholder="Örneğin: Trileçe"
        >
        <label class="label">
          <span class="label-text">Açıklama</span>
        </label>
        <input
          v-model="menuItemDesc"
          type="text"
          class="input input-bordered"
          placeholder="Karamel soslu sütlü tatlı"
        >
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="postMenuItem"
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
  selectedCategory: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu2()
const isSaveButtonDisabled = ref(false)
const menuItemName = ref('')
const menuItemDesc = ref('')

watchEffect(() => {
  if (menuItemName.value?.length > 0)
    isSaveButtonDisabled.value = false
  else
    isSaveButtonDisabled.value = true
})

const postMenuItem = async() => {
  isSaveButtonDisabled.value = true

  await adminMenu.postMenuItem({
    fields: {
      name: menuItemName.value,
      description: menuItemDesc.value,
    },
    id: props.selectedCategory?.id,
  })

  onClose()
}
const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
