<template>
  <div>
    <div
      tabindex="0"
      class="collapse border rounded-box border-base-300 collapse-arrow"
      :class="isCollapse ? 'collapse-open' : 'collapse-close'"
    >
      <div class="absolute right-12 top-4">
        <slot name="actions" />
      </div>
      <div
        class="collapse-title text-xl font-medium pl-4 py-4"
        @click="onClickTitle"
      >
        <div class="xs:w-16 sm:w-16 md:w-16 lg:w-64">
          {{ props.categoryData.category.name }}
        </div>
      </div>

      <div class="collapse-content">
        <slot name="header" />
        <menu-item
          v-for="menuItem in props.categoryData.items"
          :key="menuItem.id"
          :menu-item-data="menuItem"
        >
          <template #actions>
            <slot name="itemActions" :menuItem="menuItem" />
          </template>
        </menu-item>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  categoryData: {
    type: Object,
    required: true,
  },
  collapseOpen: {
    type: Boolean,
    default: false,
  },
})

const isCollapse = ref(false)

watchEffect(() => {
  isCollapse.value = props.collapseOpen
})

const onClickTitle = () => {
  isCollapse.value = !isCollapse.value
}
</script>
