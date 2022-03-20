<template>
  <div>
    <BusinessCard v-if="businessInfo" @like="onLikeBusiness" />
    <div class="flex flex-row mt-4 justify-between">
      <menu-search class="md:flex-1 md:mr-4" />
      <user-menu-dropdown />
    </div>
    <menu-category
      v-for="categoryData in userMenu"
      :key="categoryData.id"
      class="my-4"
      :category-data="categoryData"
      :collapse-open="isCollapseOpen"
    />
  </div>
</template>
<script setup lang="ts">
import { useUserMenu } from '~/stores/user'
import { useAuthStore } from '~/stores/auth'

const route = useRoute()
const { businessUsername } = route.params
const menu = useUserMenu()
const auth = useAuthStore()

const userMenu = computed(() => menu.getMenu)
const businessInfo = computed(() => menu.getBusinessInfo)

const isCollapseOpen = computed(() => {
  return menu.getFilteredMenu.length > 0
})

const isMenuDropDownVisible = computed(() => {
  return menu.getSelectedMenu?.id
})

menu.fetchMenu({ businessUsername })

const onLikeBusiness = async(data) => {
  const userId = auth.currentUser.getUsername()
  const payload = {
    userId,
    businessId: businessInfo.value.id,
    ...data,
  }

  await menu.likeBusiness(payload)
}
</script>
