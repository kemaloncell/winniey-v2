<template>
  <div class="custom-tabs">
    <a
      v-for="tab in tabs"
      class="tab tab-bordered"
      @click="onClickTab(tab)"
    >
      {{ tab.title }}
    </a>
  </div>
</template>

<script setup>
const emit = defineEmits()
const props = defineProps({
  tabs: {
    type: Array,
  },
})
const tabs = computed(() => {
  if (!props.tabs.length) return []
  return props.tabs.map((tab, index) => {
    return {
      id: tab.id,
      title: tab.name,
    }
  })
})
const onClickTab = (tab) => {
  emit('tab', tab)
}

</script>

<style>
.custom-tabs {
  max-width: 100vw;
  overflow: scroll;
  display: flex;
}
.custom-tabs::-webkit-scrollbar {
  display: none;
}
</style>
