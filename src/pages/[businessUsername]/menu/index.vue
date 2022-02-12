<template>
  <div>
    <BusinessCard v-if="businessInfo" :business-info="businessInfo" />
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
import { Hub } from '@aws-amplify/core'
import { DataStore } from '@aws-amplify/datastore'
import { useUserMenu } from '~/stores/user'
import NProgress from "nprogress";

const route = useRoute()
const { businessUsername } = route.params
const menu = useUserMenu()

const userMenu = computed(() => menu.getMenu)
const businessInfo = computed(() => menu.getBusinessInfo)

const isCollapseOpen = computed(() => {
  return menu.getFilteredMenu.length > 0
})

const isMenuDropDownVisible = computed(() => {
  return menu.getSelectedMenu?.id
})
NProgress.start()
DataStore.start()
const listener = Hub.listen('datastore', async(hubData) => {
  const { event, data } = hubData.payload
  if (event === 'modelSynced') {
    if (!data.isFullSync && data.isDeltaSync)
      getMenu()
  }
  if (event === 'ready')
    getMenu()
})

const getMenu = async() => {
  listener()
  await menu.fetchMenu({ businessUsername })
}
</script>
