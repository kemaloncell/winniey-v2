<template>
  <div class="bg-base-200 rounded-box p-4 ">
    <div class="card-header flex justify-between">
      <div>masa no :2 </div>
      <div>tarih : 12/12/2022 </div>
    </div>
    <div class="card-body">
      <OrderItem />
    </div>
    <div class="flex justify-between">
      <div>note</div>
      <button class="btn btn-primary">Onayla</button>
    </div>
  </div>
</template>
<script setup>
import OrderItem from './orderItem.vue'
</script>
