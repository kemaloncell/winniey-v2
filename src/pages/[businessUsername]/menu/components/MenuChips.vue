<template>
  <div class="custom-chips">
    <Chip class="bg-red-500/90" @click="onClickChip(), listModalTitle='Restoranın Seçtikleri'">
      <carbon-star />
      <span>
        Restoranın Seçtikleri
      </span>
    </Chip>
    <Chip class="bg-blue-500" @click="onClickChip(), listModalTitle='Kampanyalar'">
      <carbon-percentage />
      <span>
        İndirimdekiler
      </span>
    </Chip>
    <Chip class="bg-indigo-500" @click="onClickChip(), listModalTitle='İndirimdekiler'">
      <carbon-tag />
      <span>
        Kampanyalar
      </span>
    </Chip>
    <ItemListModal
      :show="isListModalShow"
      :title="listModalTitle"
      @close="isListModalShow = false"
    />
  </div>
</template>
<script setup>
import ItemListModal from './ItemListModal.vue'

const isListModalShow = ref(false)
const listModalTitle = ref('Restoranın Seçtikleri')

const onClickChip = () => {
  isListModalShow.value = true
}
</script>
<style>
.custom-chips {
  max-width: 100vw;
  overflow: scroll;
  display: flex;
  gap: 0.5rem;
}
.custom-chips::-webkit-scrollbar {
  display: none;
}
</style>
