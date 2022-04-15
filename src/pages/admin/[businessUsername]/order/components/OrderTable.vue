<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <!-- head -->
      <thead class="text-left">
        <tr>
          <th>Tarih</th>
          <th>Masa</th>
          <th>Tutar</th>
          <th class="text-center">
            Detay
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in props.orders">
          <td>{{ order.createdAt }}</td>
          <td>{{ order.tableId }}</td>
          <td>{{ order.totalPrice }} TL</td>
          <td>
            <div class="flex gap-4 justify-center">
              <button class="btn btn-sm btn-primary">
                Detay
              </button>
              <button class="btn btn-sm btn-success">
                Onayla
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
  orders: {
    type: Array,
    default: () => [],
  },
})
</script>
