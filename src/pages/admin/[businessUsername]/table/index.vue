<template>
  <div>
    <div class="flex justify-end mb-2">
      <button class="btn">
        Yeni Ekle
      </button>
    </div>
    <TableTable />
  </div>
</template>
<script setup>
import TableTable from './components/TableTable.vue'
import { useAdminTables } from '~/stores/admin/table'

const adminTables = useAdminTables()

adminTables.fetchTables()

</script>
<route lang="yaml">
meta:
  layout: admin
</route>
