<template>
  <OrderTable :orders="orders" />
</template>
<script setup>
import OrderTable from './components/OrderTable.vue'
import { useAdminOrders } from '~/stores/admin/order'

const adminOrders = useAdminOrders()
adminOrders.fetchOrders()

const orders = computed(() => {
  return adminOrders.getOrders
})
</script>
<route lang="yaml">
meta:
  layout: admin
</route>
