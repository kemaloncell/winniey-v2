<template>
  <div class="custom-chips">
    <Chip class="bg-red-500/90">
      <carbon-star />
      <span>
        Restoranın Seçtikleri
      </span>
    </Chip>
    <Chip class="bg-blue-500">
      <carbon-percentage />
      <span>
        İndirimdekiler
      </span>
    </Chip>
    <Chip class="bg-indigo-500">
      <carbon-tag />
      <span>
        Kampanyalar
      </span>
    </Chip>
  </div>
</template>
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
