<template>
  <div>
    <BusinessCard v-if="businessInfo" />
    <!-- <MenuChips class="my-2" /> -->
    <br>
    <div class="sticky top-0 z-10 bg-base-100">
      <div class="flex flex-row justify-between gap-4">
        <menu-search class="flex-1" />
        <user-menu-dropdown
          v-if="isMenuDropDownVisible"
        />
      </div>
      <MenuTabs class="my-4" :tabs="userMenu2" @tab="onChangeTab" />
    </div>
    <menu-category
      v-for="categoryData in userMenu2"
      :key="categoryData.id"
      class="my-2"
      :category-data="categoryData"
      :collapse-open="isCollapseOpen"
    />
  </div>
</template>
<script setup lang="ts">
import MenuChips from './components//MenuChips.vue'
import { useUserMenu } from '~/stores/user'
import { useUserMenu2 } from '~/stores/user/menu'
import { useAuthStore } from '~/stores/auth'

const route = useRoute()
const { businessUsername } = route.params
const menu = useUserMenu()
const menu2 = useUserMenu2()
const auth = useAuthStore()

const userMenu = computed(() => menu.getMenu)
const userMenu2 = computed(() => menu2.getMenu)

const businessInfo = computed(() => menu2.getBusinessInfo)

const isCollapse = ref(true)

const isCollapseOpen = computed(() => {
  return menu.getFilteredMenu.length > 0 || isCollapse.value
})

const isMenuDropDownVisible = computed(() => {
  return menu2.getMenus?.length > 1
})

menu.fetchMenu({ businessUsername })
menu2.fetchAllInfo({ businessUsername })

</script>

<script lang="ts">
export default {
  methods: {
    onChangeTab(tab) {
      const selector = `#category-${tab.id}`
      const el = this.$el.querySelector(selector)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    },
  },
}
</script>
