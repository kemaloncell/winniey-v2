<template>
  <global-modal :show="show">
    <template #header>
      Sil
    </template>
    <template #body>
      <div class="form-control mt-5">
        <p>
          <b>
            <u>
              {{ selectedMenuItem.name }}
            </u>
          </b>
          adlı içeriği silmek istediğinizden emin misiniz?
        </p>
      </div>
    </template>
    <template #action>
      <button
        class="btn bg-red-500"
        :disabled="isDeleteButtonDisabled"
        @click="deleteMenuItem"
      >
        Sil
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAdminMenu2} from '~/stores/admin/menu'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  selectedMenuItem: {
    type: Object,
    default: () => ({}),
  },
})

const adminMenu = useAdminMenu2()
const emit = defineEmits()
const isDeleteButtonDisabled = ref(false)

const deleteMenuItem = async() => {
  isDeleteButtonDisabled.value = true

  await adminMenu.deleteMenuItem(props.selectedMenuItem)

  onClose()
}

const onClose = () => {
  isDeleteButtonDisabled.value = false
  emit('close')
}
</script>
