<template>
  <global-modal :show="show">
    <template #header>
      {{ props.isEdit ? 'Masa Güncelle' : 'Masa Ekle' }}
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Masa Adı</span>
        </label>
        <input
          v-model="tableName"
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
        @click="onClickSave"
      >
        {{ props.isEdit ? 'Güncelle' : 'Ekle' }}
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAdminTables } from '~/stores/admin/table'
import { useAdminBusiness } from '~/stores/admin/business'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
  table: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits()
const adminTables = useAdminTables()
const adminBusiness = useAdminBusiness()
const tableName = ref('')
const isSaveButtonDisabled = ref(false)

watchEffect(() => {
  if (props.isEdit)
    tableName.value = props.table.tableName
  else
    tableName.value = ''
})

const onClickSave = () => {
  if (props.isEdit)
    updateTable()
  else
    addTable()
}

const addTable = async() => {
  isSaveButtonDisabled.value = true
  await adminTables.addTable({
    tableName: tableName.value,
    businessId: adminBusiness.getBusiness.id,
  })
  onClose()
}

const updateTable = async() => {
  isSaveButtonDisabled.value = true
  await adminTables.updateTable({
    id: props.table.id,
    update: {
      tableName: tableName.value,
    },
  })
  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
