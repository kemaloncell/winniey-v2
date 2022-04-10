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
              <button class="btn btn-sm btn-primary">
                Güncelle
              </button>
              <button class="btn btn-sm btn-error">
                Sil
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useAdminTables } from '~/stores/admin/table'

const adminTables = useAdminTables()

const getTables = computed(() => {
  return adminTables.getTables
})
</script>
