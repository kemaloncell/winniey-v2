<template>
  <div>
    <input
      id="my-modal-2"
      v-model="show"
      type="checkbox"
      class="modal-toggle"
    >
    <div class="modal">
      <div class="modal-box">
        <div class="form-control flex items-center">
          <h2>
            <slot name="header" />
          </h2>
        </div>

        <div class="mt-4">
          <slot name="body" />
        </div>

        <div class="modal-action">
          <slot name="action" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
