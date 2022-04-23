<template>
  <input
    v-model="searchText"
    type="search"
    placeholder="Arama..."
    class="input input-bordered"
  >
</template>

<script setup lang="ts">
import { watchEffect } from '@vue/runtime-core'
import { useAdminMenu2 } from '~/stores/admin/menu'

const searchText = ref('')
const adminMenu = useAdminMenu2()

watchEffect(() => {
  adminMenu.search(searchText.value)
})
</script>
