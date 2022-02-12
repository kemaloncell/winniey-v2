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
import { useUserMenu } from '~/stores/user'

const searchText = ref('')
const userMenu = useUserMenu()

watchEffect(() => {
  userMenu.search(searchText.value)
})
</script>
