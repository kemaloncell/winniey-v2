<template>
  <global-modal :show="show">
    <template #header>
      <slot name="header" />
    </template>
    <template #body>
      <div class="form-control mt-5">
        <p>
          <slot name="body" />
        </p>
      </div>
    </template>
    <template #action>
      <a class="btn bg-red-500" @click="onConfirm">Onayla</a>
      <a class="btn" @click="onClose">Vazgeç</a>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits()

const onConfirm = async() => {
  emit('confirm')
  onClose()
}

const onClose = () => {
  emit('close')
}
</script>
