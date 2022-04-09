<template>
  <global-modal :show="show">
    <template #header>
      Kategori Ekle
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Kategori Adı</span>
        </label>
        <input
          v-model="categoryName"
          type="text"
          placeholder="Kategori adı giriniz. Örneğin: Tatlılar"
          class="input input-bordered"
        >
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="postCategory"
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
import { useAdminMenu } from '~/stores/admin'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu()
const categoryName = ref('')
const isSaveButtonDisabled = ref(false)

watchEffect(() => {
  if (categoryName.value?.length > 0)
    isSaveButtonDisabled.value = false
  else
    isSaveButtonDisabled.value = true
})

const postCategory = async() => {
  isSaveButtonDisabled.value = true

  await adminMenu.postCategory({
    name: categoryName.value,
  })

  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
