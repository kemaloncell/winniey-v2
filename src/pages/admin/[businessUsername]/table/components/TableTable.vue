<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <thead class="text-left">
        <tr>
          <th>Masa Adı</th>
          <th class="text-center">
            Detay
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table in getTables">
          <td>{{ table.tableName }}</td>
          <td>
            <div class="flex justify-center gap-2">
              <button class="btn btn-sm btn-primary" @click="onClickEdit(table)">
                <carbon-edit />
              </button>
              <button class="btn btn-sm" @click="onClickBarcode(table)">
                <carbon-barcode />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AddTable
      is-edit
      :table="currentTable"
      :show="isUpdateTableModal"
      @close="isUpdateTableModal = false"
    />
    <CreateBarcode
      :table="currentTable"
      :show="isBarcodeModal"
      @close="isBarcodeModal = false"
    />
  </div>
</template>
<script setup>
import AddTable from '../modals/AddTable.vue'
import CreateBarcode from '../modals/CreateBarcode.vue'
import { useAdminTables } from '~/stores/admin/table'

const adminTables = useAdminTables()
const currentTable = ref({})
const isUpdateTableModal = ref(false)
const isBarcodeModal = ref(false)

const getTables = computed(() => {
  return adminTables.getTables
})

const onClickEdit = (table) => {
  currentTable.value = table
  isUpdateTableModal.value = true
}

const onClickBarcode = (table) => {
  currentTable.value = table
  isBarcodeModal.value = true
}
</script>
