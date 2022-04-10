<template>
  <global-modal :show="show">
    <template #header>
      {{ props.title }}
    </template>
    <template #body>
      <menu-item
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :menu-item-data="menuItem"
      />
    </template>
    <template #action>
      <button class="btn" @click="onClose">
        Kapat
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useUserMenu2 } from '~/stores/user/menu'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
})

const userMenu = useUserMenu2()

const emit = defineEmits()

const onClose = () => {
  emit('close')
}

const menuItems = computed(() => {
  const items = []
  userMenu.menu.forEach((category) => {
    if (category.Items) {
      category.Items.forEach((item) => {
        items.push(item)
      })
    }
  })

  return items
})
</script>
