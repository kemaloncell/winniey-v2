<script setup lang="ts">
if (window?.location) {
  const host = window.location.host
  if (!host.includes('netlify')) {
    const parts = host.split('.')
    const domainLength = 3
    if (parts.length === domainLength) {
      const username = parts[0]
      const router = useRouter()

      router.push(`/${username}/menu`)
    }
  }
}
useHead({
  title: 'Winniey ',
  meta: [
    { name: 'description', content: '' },
  ],
})
</script>

<template>
  <router-view />
</template>
