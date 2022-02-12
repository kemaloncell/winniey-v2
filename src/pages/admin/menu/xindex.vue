<template>
  <div>
    <div class="flex flex-col md:flex-row justify-end gap-2">
      <menu-dropdown />
    </div>
    <menu-category
      v-for="categoryData in adminMenu"
      :key="categoryData.id"
      class="my-4"
      :category-data="categoryData"
    >
      <template #header>
        <div class="flex justify-center mb-4">
          <a
            class="btn btn-sm btn-primary"
            @click="onChildAddModal(categoryData)"
          >Ekle</a>
        </div>
      </template>
      <template #actions>
        <button class="btn btn-sm" @click="onEditModal(categoryData)">
          <outline-pencil-icon class="w-8 h-5" />
        </button>
        <button
          v-if="categoryData.items && categoryData.items.length === 0"
          class="btn btn-sm ml-4 bg-red-500"
          @click="onDeleteModal(categoryData)"
        >
          <outline-archive-icon class="w-8 h-5" />
        </button>
      </template>
      <template #itemActions="{ menuItem }">
        <a type="button" class="btn btn-sm" @click="onChildEditModal(menuItem)">
          <outline-pencil-icon class="w-8 h-5" />
        </a>
        <a class="btn btn-sm bg-red-500" @click="onChildDeleteModal(menuItem)">
          <outline-archive-icon class="w-8 h-5" />
        </a>
      </template>
    </menu-category>
  </div>
</template>
<script setup lang="ts">
import { useAdminMenu } from '~/stores/admin'
import MenuDropdown from '~/pages/admin/menu/components/MenuDropdown.vue'

const menu = useAdminMenu()

const adminMenu = computed(() => menu.getMenu)
menu.fetchMenu()
</script>
