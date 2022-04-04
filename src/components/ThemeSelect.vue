<template>
  <div class="dropdown dropdown-end z-50">
    <label tabindex="0" class="btn"><carbon-color-palette /></label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
      <li v-for="theme in themes">
        <button :data-set-theme="theme" data-act-class="ACTIVECLASS" class="text-base-content">
          {{ theme }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { themeChange } from 'theme-change'

const themes = ['light', 'dark', 'black', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'lucifer']

onMounted(() => {
  themeChange(false)
})
</script>
