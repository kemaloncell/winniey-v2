<template>
  <div>
    <div class="flex justify-end mb-2">
      <button class="btn" @click="onClickAddTable">
        <carbon-add />
      </button>
    </div>
    <TableTable />
    <AddTable
      :show="isAddTableModal"
      @close="isAddTableModal = false"
    />
  </div>
</template>
<script setup>
import TableTable from './components/TableTable.vue'
import AddTable from './modals/AddTable.vue'
import { useAdminTables } from '~/stores/admin/table'

const adminTables = useAdminTables()
const isAddTableModal = ref(false)

adminTables.fetchTables()

const onClickAddTable = () => {
  isAddTableModal.value = true
}
</script>
<route lang="yaml">
meta:
  layout: admin
</route>
