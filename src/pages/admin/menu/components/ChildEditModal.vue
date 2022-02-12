<template>
  <global-modal :show="show">
    <template #header>
      Düzenle
    </template>
    <template #body>
      <div class="form-control">
        <label class="label">
          <span class="label-text">İçerik Adı</span>
        </label>
        <input
          v-model="menuItemName"
          type="text"
          class="input input-bordered"
          placeholder="Örneğin: Trileçe"
        >

        <label class="label">
          <span class="label-text">Açıklama</span>
        </label>
        <input
          v-model="menuItemDesc"
          type="text"
          placeholder="Karamel soslu sütlü tatlı"
          class="input input-bordered"
        >
      </div>

      <label class="label">
        <span class="label-text">Fiyat</span>
      </label>
      <div class="flex gap-4">
        <div>
          <input
            v-model="menuItemPrice"
            type="text"
            placeholder="Ör: 29.90 TL"
            class="input input-bordered"
          >
        </div>
        <div>
          <select
            v-model="menuItemCurrency"
            class="select w-full select-bordered"
          >
            <option
              v-for="currency in menuItemCureencies"
              :key="currency"
              :value="currency"
            >
              {{ currency }}
            </option>
          </select>
        </div>
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="updateMenuItem"
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
  selectedMenuItem: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits()
const adminMenu = useAdminMenu()
const menuItemName = ref('')
const menuItemDesc = ref('')
const menuItemPrice = ref('')
const menuItemCurrency = ref('')
const menuItemCureencies = ['TRY', 'USD', 'ROUBLE', 'EUR']
const isSaveButtonDisabled = ref(false)

watchEffect(() => (menuItemName.value = props.selectedMenuItem?.name))
watchEffect(() => (menuItemDesc.value = props.selectedMenuItem?.description))
watchEffect(() => (menuItemPrice.value = props.selectedMenuItem?.price))
watchEffect(() => (menuItemCurrency.value = props.selectedMenuItem?.currency))

watchEffect(() => {
  if (menuItemName.value?.length > 0)
    isSaveButtonDisabled.value = false
  else
    isSaveButtonDisabled.value = true
})

const updateMenuItem = async() => {
  isSaveButtonDisabled.value = true

  await adminMenu.updateMenuItem({
    update: {
      name: menuItemName.value,
      description: menuItemDesc.value,
      price: parseFloat(menuItemPrice.value),
      currency: menuItemCurrency.value,
    },
    menuItem: props.selectedMenuItem,
  })

  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}
</script>
