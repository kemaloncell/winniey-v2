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

</script>
<route lang="yaml">
meta:
  layout: admin
</route>
