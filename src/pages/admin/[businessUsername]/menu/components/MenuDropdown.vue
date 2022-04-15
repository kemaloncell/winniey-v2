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
        <option v-for="menu in menus" :value="menu.id">
          {{ menu.name }}
        </option>
      </select>
    </div>
    <div>
      <div v-if="isDeleteMenuShow" data-tip="Menü Sil" class="ml-4 tooltip">
        <button class="btn btn-circle bg-red-500" @click="onClickDeleteMenu">
          <carbon-trash-can class="w-8 h-5" />
        </button>
      </div>
      <div data-tip="Menü Ekle" class="ml-4 tooltip">
        <button class="btn btn-circle" @click="onClickAddMenu">
          <carbon-add class="w-8 h-5" />
        </button>
      </div>
      <div data-tip="Menü Ayarları" class="ml-4 tooltip">
        <button class="btn btn-circle" @click="onClickSettings">
          <carbon-settings class="w-8 h-5" />
        </button>
      </div>
      <add-menu
        :show="isAddMenuModalShow"
        @close="isAddMenuModalShow = false"
      />
      <menu-settings
        :show="isSettingsModalShow"
        :menu="selectedItem"
        @close="isSettingsModalShow = false"
      />
      <ConfirmModal
        :show="isDeleteMenuModalShow"
        @confirm="deleteMenu"
        @close="isDeleteMenuModalShow = false"
      >
        <template #header>
          Menü Sil
        </template>
        <template #body>
          Menü adı: <strong>{{ selectedItem.name }}</strong>
          <br>
          Bu menüyü silmek istiyor musunuz?
        </template>
      </ConfirmModal>
    </div>
  </div>
</template>
<script setup lang="ts">
import AddMenu from '../modals/AddMenu.vue'
import MenuSettings from '~/pages/admin/menu/modals/MenuSettings.vue'
import { useAdminMenu2 } from '~/stores/admin/menu'
const adminMenu = useAdminMenu2()
const isAddMenuModalShow = ref(false)
const isDeleteMenuModalShow = ref(false)
const isSettingsModalShow = ref(false)

const selectedItemId = ref('')

const selectedMenu = computed(() => {
  return adminMenu.getSelectedMenu
})

watchEffect(() => {
  selectedItemId.value = selectedMenu.value?.id
})

const menus = computed(() => {
  return adminMenu.getMenus || []
})

const isDeleteMenuShow = computed((): boolean => {
  return adminMenu.menu.length === 0
})

const onChangeMenu = () => {
  adminMenu.setSelectedMenu(selectedItemId.value)
  adminMenu.fetchSelectedMenu(selectedItemId.value)
}

const selectedItem = computed(() => {
  return menus.value.find(menu => menu.id === selectedItemId.value) || {}
})

const deleteMenu = async() => {
  adminMenu.deleteMenu({
    menu: adminMenu.getSelectedMenu,
  })
}
const onClickDeleteMenu = () => {
  isDeleteMenuModalShow.value = true
}
const onClickAddMenu = () => {
  isAddMenuModalShow.value = true
}
const onClickSettings = () => {
  isSettingsModalShow.value = true
}
</script>
