<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">Winniey Admin</span>
    </div>
    <div class="px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
        <router-link class="btn btn-ghost btn-sm rounded-btn" :to="`/admin/${username}/menu`">
          Menu
        </router-link>
        <router-link class="btn btn-ghost btn-sm rounded-btn" :to="`/admin/${username}/order`">
          Order
        </router-link>
        <router-link class="btn btn-ghost btn-sm rounded-btn" :to="`/admin/${username}/table`">
          Table
        </router-link>
      </div>
    </div>
    <div class="navbar-end">
      <authanticated-user-menu />
    </div>
  </div>
</template>
<script setup>
const route = useRoute()

const username = computed(() => {
  const { businessUsername } = route.params
  return businessUsername
})
</script>
