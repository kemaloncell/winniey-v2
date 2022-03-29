<template>
  <div class="w-full">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section id="bottom-navigation" class="rounded-2xl block fixed inset-x-0 bottom-0 z-10 bg-base-200 shadow p-1 navbar">
      <div id="tabs" class="flex justify-between">
        <router-link class="w-full hover:text-secondary-focus justify-center inline-block text-center" to="/peraantakya/menu">
          <carbon-restaurant-fine class="inline-block"></carbon-restaurant-fine>
          <span class="tab tab-home block">Menu</span>
        </router-link>

        <router-link class="w-full hover:text-secondary-focus justify-center inline-block text-center" to="/peraantakya/basket">
          <carbon-shopping-bag class="inline-block"></carbon-shopping-bag>
          <span class="tab block">Sepet</span>
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BottomNavigation',
}
</script>
