<template>
  <global-modal :show="show">
    <template #header>
      Menü Ayarları
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Menü Adı</span>
        </label>
        <input
          v-model="menu.name"
          type="text"
          placeholder="Menü adı giriniz. Örneğin: Türkçe"
          class="input input-bordered"
        >
        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">İşletme Açıklaması</span>
          </label>
          <input
              v-model="menu.description"
              type="text"
              placeholder="İşletme açıklaması."
              class="input input-bordered"
          >
        </div>
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="addMenu"
      >
        Kaydet
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAdminMenu } from '~/stores/admin'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  menu: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu()
const menu = ref({})
const isSaveButtonDisabled = ref(false)

watchEffect(() => (menu.value = JSON.parse(JSON.stringify(props.menu))))

const addMenu = async() => {
  isSaveButtonDisabled.value = true

  adminMenu.updateMenu({
    menu: menu.value,
    update: {
      name: menu.value.name,
      description: menu.value.description,
    },
  })

  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
