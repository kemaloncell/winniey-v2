<template>
  <div class="flex justify-end">
    <div>
      <select
        v-model="selectedItemId"
        class="select select-bordered"
        @change="onChangeMenu"
      >
        <option disabled="disabled">
          Menü Seçimi
        </option>
        <option v-for="menu in menus" :key="menu.id" :value="menu.id">
          {{ menu.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserMenu } from '~/stores/user'

const userMenu = useUserMenu()
const selectedItemId = ref(null)
const route = useRoute()
const { businessUsername } = route.params

const selectedMenu = computed(() => {
  return userMenu.getSelectedMenu
})

watchEffect(() => {
  selectedItemId.value = selectedMenu.value?.id
})

const menus = computed(() => {
  return userMenu.getMenus
})

const onChangeMenu = () => {
  if (selectedItemId.value) {
    userMenu.setSelectedMenu(selectedItemId.value)
    userMenu.fetchMenu({ businessUsername })
  }
}

</script>
