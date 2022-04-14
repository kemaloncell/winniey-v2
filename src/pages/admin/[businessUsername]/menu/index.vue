<template>
  <div>
    <div class="flex flex-col md:flex-row justify-end gap-2">
      <menu-dropdown v-if="isMenuDropDownVisible" />
      <admin-menu-search />
    </div>
    <draggable
      v-model="data"
      handle=".handle"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="flex my-4 gap-1 items-center">
          <button
            class="handle btn btn-ghost  h-full py-1 bordered flex items-center justify-center p-2 text-2xl font-bold cursor-pointer"
          >
            <carbon-menu />
          </button>
          <menu-category

            class="flex-1"
            :category-data="element"
            :collapse-open="isCollapseOpen"
          >
            <template #header>
              <div class="flex justify-center mb-4">
                <a
                  class="btn btn-sm btn-primary"
                  @click="onChildAddModal(element)"
                >Ekle</a>
              </div>
            </template>
            <template #actions>
              <button class="btn btn-sm" @click="onEditModal(element)">
                <carbon-edit class="w-8 h-5" />
              </button>
              <button
                v-if="element.Items && element.Items.length === 0"
                class="btn btn-sm ml-4 bg-red-500"
                @click="onDeleteModal(element)"
              >
                <carbon-trash-can class="w-8 h-5" />
              </button>
            </template>
            <template #itemActions="{ menuItem }">
              <a type="button" class="btn btn-sm" @click="onChildEditModal(menuItem)">
                <carbon-edit class="w-8 h-5" />
              </a>
              <a class="btn btn-sm bg-red-500" @click="onChildDeleteModal(menuItem)">
                <carbon-trash-can class="w-8 h-5" />
              </a>
            </template>
          </menu-category>
        </div>
      </template>
    </draggable>
    <div class="flex justify-center my-4">
      <button
        v-if="isAddCategoryButtonVisible"
        class="btn btn-primary"
        @click="isAddModal = !isAddModal"
      >
        Kategori Ekle
      </button>
      <button v-else class="btn btn-primary" @click="onClickCreateMenu">
        Menü Oluştur
      </button>
    </div>
    <!--Add Category Modal Start-->
    <add-category-modal :show="isAddModal" @close="isAddModal = false" />
    <!--Add Category Modal End-->

    <!--Add Edit Modal Start-->
    <edit-modal
      :show="isEditModal"
      :selected-category="selectedCategory"
      @close="isEditModal = false"
    />
    <!--Add Edit Modal End-->

    <!--Add Edit Modal Start-->
    <delete-modal
      :show="isDeleteModal"
      :selected-category="selectedCategory"
      @close="isDeleteModal = false"
    />
    <!--Add Edit Modal End-->

    <!--Child Add  Modal Start-->
    <child-add-modal
      :show="isChildAddModal"
      :selected-category="selectedCategory"
      @close="isChildAddModal = false"
    />
    <!--Child Add  Modal End-->

    <!--Child Edit Modal Start-->
    <child-edit-modal
      :show="isChildEditModal"
      :selected-menu-item="selectedMenuItem"
      @close="isChildEditModal = false"
    />
    <!--Child  dit Modal End-->

    <!--Child Delete Modal Start-->
    <child-delete-modal
      :show="isChildDeleteModal"
      :selected-menu-item="selectedMenuItem"
      @close="isChildDeleteModal = false"
    />
    <!--Child Delete Modal End-->
  </div>
</template>
<script setup lang="ts">
import draggable from 'vuedraggable'
// Modals
import AddCategoryModal from './components/AddCategoryModal.vue'
import EditModal from './components/EditModal.vue'
import DeleteModal from './components/DeleteModal.vue'
import ChildAddModal from './components/ChildAddModal.vue'
import MenuDropdown from './components/MenuDropdown.vue'
import ChildEditModal from './components/ChildEditModal.vue'
import ChildDeleteModal from './components/ChildDeleteModal.vue'
import { useAdminMenu } from '~/stores/admin'
import { useAdminMenu2 } from '~/stores/admin/menu'
// Tab Componentes

const adminMenu = useAdminMenu()
const adminMenu2 = useAdminMenu2()
const isAddModal = ref(false)
const isEditModal = ref(false)
const isDeleteModal = ref(false)
const isChildAddModal = ref(false)
const isChildEditModal = ref(false)
const isChildDeleteModal = ref(false)
const selectedCategory = ref({})
const selectedMenuItem = ref({})

const isAddCategoryButtonVisible = computed(() => {
  return adminMenu.getSelectedMenu?.id
})

const isMenuDropDownVisible = computed(() => {
  return adminMenu.getSelectedMenu?.id
})

const isCollapseOpen = computed(() => {
  return adminMenu.getFilteredMenu.length > 0
})

const onEditModal = (val) => {
  isEditModal.value = !isEditModal.value
  selectedCategory.value = val
}
const onDeleteModal = (val) => {
  isDeleteModal.value = !isDeleteModal.value
  selectedCategory.value = val
}
const onChildAddModal = (val) => {
  isChildAddModal.value = !isChildAddModal.value
  selectedCategory.value = val
}
const onChildEditModal = (val) => {
  isChildEditModal.value = !isChildEditModal.value
  selectedMenuItem.value = val
}
const onChildDeleteModal = (val) => {
  isChildDeleteModal.value = !isChildDeleteModal.value
  selectedMenuItem.value = val
}
const data = computed({
  get() {
    return adminMenu2.getMenu
  },
  set(value) {
    adminMenu.setDraggedMenuCategory(value)
  },
})

const selectedMenu = computed(() => adminMenu.getSelectedMenu)

adminMenu.fetchMenu()
adminMenu2.fetchAllInfo()

</script>

<route lang="yaml">
meta:
  layout: admin
</route>
