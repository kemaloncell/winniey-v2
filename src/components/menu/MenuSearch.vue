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
import { useUserMenu2 } from '~/stores/user/menu'

const searchText = ref('')
const userMenu = useUserMenu2()

watchEffect(() => {
  userMenu.search(searchText.value)
})
</script>
