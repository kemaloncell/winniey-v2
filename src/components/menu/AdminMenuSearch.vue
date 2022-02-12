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
import { useAdminMenu } from '~/stores/admin'

const searchText = ref('')
const adminMenu = useAdminMenu()

watchEffect(() => {
  adminMenu.search(searchText.value)
})
</script>
