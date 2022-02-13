<template>
  <div>
    <Header />
    <div v-if="!ready" class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
    </div>

    <div v-else class="flex justify-center">
      <div class="flex-1 max-w-7xl mx-2 md:mx-0">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import { DataStore } from '@aws-amplify/datastore'
import { Hub } from '@aws-amplify/core'

const router = useRouter()
const ready = ref(false)

const { options } = router

DataStore.start()
const listener = Hub.listen('datastore', async(hubData) => {
  const { event, data } = hubData.payload
  if (event === 'modelSynced') {
    if (!data.isFullSync && data.isDeltaSync)
      setReady()
  }
  if (event === 'ready')
    setReady()
})

const setReady = () => {
  listener()
  ready.value = true
}
if (options?.history?.state?.forward)
  setReady()

</script>
<style scoped>
.loader {
  border-top-color: #bd0091;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
