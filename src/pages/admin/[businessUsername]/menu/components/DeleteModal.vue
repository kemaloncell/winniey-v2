<template>
  <global-modal :show="show">
    <template #header>
      Kategori Sil
    </template>
    <template #body>
      <div class="form-control mt-5">
        <p>
          <b>
            <u>
              {{ props.selectedCategory && props.selectedCategory.name }}
            </u>
          </b>
          adlı kategoriyi silmek istediğinizden emin misiniz?
        </p>
      </div>
    </template>
    <template #action>
      <a class="btn bg-red-500" @click="deleteCategory">Sil</a>
      <a class="btn" @click="onClose">Vazgeç</a>
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

const adminMenu = useAdminMenu2()
const emit = defineEmits()
const isDeleteButtonDisabled = ref(false)
const deleteCategory = async() => {
  isDeleteButtonDisabled.value = true

  await adminMenu.deleteCategory(props.selectedCategory)

  onClose()
}

const onClose = () => {
  isDeleteButtonDisabled.value = false
  emit('close')
}
</script>
