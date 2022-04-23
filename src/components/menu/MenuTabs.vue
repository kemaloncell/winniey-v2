<template>
  <div class="container bg-base-200 rounded-lg">
    <div class="tabs">
      <a
        v-for="tab in tabs"
        :id="tab.id"
        class="tab whitespace-nowrap"
        @click="onClickTab(tab)"
      >
        {{ tab.title }}
      </a>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits()
const props = defineProps({
  tabs: {
    type: Array,
  },
})
const currentCategory = ref(0)
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
  currentCategory.value = tab
  emit('tab', tab)
}
/* const getCategoryElement = (category) => {
  return document.getElementById(category.id)
}
const elementInViewport = (el) => {
  if (!el) return

  const width = el.offsetWidth
  const height = el.offsetHeight

  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }

  console.log(_x, _y, width, height, window.scrollY, window.innerHeight, window.innerWidth)
  return (
    _y >= window.pageYOffset
      && _x >= window.pageXOffset
      && (_y + height) <= (window.pageYOffset + window.innerHeight)
      && (_x + width) <= (window.pageXOffset + window.innerWidth)
  )
}

const onScroll = () => {
  let current = null
  tabs.value.forEach((category, i) => {
    const stepElement = getCategoryElement(category)
    if (elementInViewport(stepElement))
      current = tabs.value[i]
  })
  if (current)
    currentCategory.value = current
}

window.addEventListener('scroll', onScroll) */
</script>

<style scoped>
.container::-webkit-scrollbar {
  display: none;
}
.container {
  max-width: 100vw !important;
  overflow-x: scroll !important;
  overflow-y: hidden !important;
  display: flex !important;
  max-height: 2rem !important;
}
.tabs {
  width: 100% !important;
  flex-wrap: nowrap !important;
  height: 2rem !important;
}
</style>
