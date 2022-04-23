<template>
  <global-modal :show="show">
    <template #header>
      İşletme Ayarları
    </template>
    <template #body>
      <div class="flex gap-4 items-center justify-center">
        <div class="avatar">
          <div
            class="rounded-btn w-16 h-16 mask mask-squircle"
          >
            <img
              v-if="isMenuItemImageShow"
              :src="uploadImage || menuItemImage"
              @mouseenter="isImageHover = true"
              @mouseleave="isImageHover = false"
            >
            <button
              v-else
              class="btn h-full"
              @click="onClickFileSelect"
              @mouseleave="isImageHover = false"
            >
              <carbon-cloud-upload class="w-8 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div class="form-control">
        <div v-if="businessInfo.name" class="form-control mt-4">
          <label class="label">
            <span class="label-text">İşletme Adı</span>
          </label>
          <input
            v-model="businessInfo.name"
            type="text"
            placeholder="İşletme Adı"
            class="input input-bordered"
          >
        </div>
        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Telefon Numarası</span>
          </label>
          <input
            v-model="businessInfo.phone"
            type="text"
            placeholder="İşletme Telefon numarası."
            class="input input-bordered"
          >
        </div>

        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Wifi Şifresi</span>
          </label>
          <input
            v-model="businessInfo.wifi"
            type="text"
            placeholder="İşletme Wifi şifresi."
            class="input input-bordered"
          >
        </div>
      </div>
    </template>
    <template #action>
      <button
        class="btn btn-primary"
        :disabled="isSaveButtonDisabled"
        @click="updateBusiness"
      >
        Kaydet
      </button>
      <button class="btn" @click="onClose">
        Vazgeç
      </button>
      <input
        ref="menuImageFileInput"
        class="hidden"
        type="file"
        accept="image/png, image/jpg"
        @change="onFileSelected"
      >
    </template>
  </global-modal>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useAdminMenu } from '~/stores/admin'

const dataURItoBlob = (dataURI) => {
  const bytes
      = dataURI.split(',')[0].includes('base64')
        ? atob(dataURI.split(',')[1])
        : unescape(dataURI.split(',')[1])
  const mime = dataURI.split(',')[0].split(':')[1].split(';')[0]
  const max = bytes.length
  const ia = new Uint8Array(max)
  for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i)
  return new Blob([ia], { type: mime })
}
const resizeImage = ({ file, maxSize }) => {
  const reader = new FileReader()
  const image = new Image()
  const canvas = document.createElement('canvas')
  const resize = () => {
    let { width, height } = image
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width
        width = maxSize
      }
    }
    else if (height > maxSize) {
      width *= maxSize / height
      height = maxSize
    }
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d').drawImage(image, 0, 0, width, height)
    const dataUrl = canvas.toDataURL('image/jpeg')
    return dataURItoBlob(dataUrl)
  }
  return new Promise((ok, no) => {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'))
      return
    }
    reader.onload = (readerEvent) => {
      image.onload = () => ok(resize())
      image.src = readerEvent.target.result
    }
    reader.readAsDataURL(file)
  })
}

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  businessInfo: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits()
const isSaveButtonDisabled = ref(false)
const businessInfo = ref({})
const menuImageFileInput = ref(null)
const uploadImage = ref('')
const isImageHover = ref(false)
const auth = useAuthStore()
const menu = useAdminMenu()

watchEffect(() => {
  businessInfo.value = JSON.parse(JSON.stringify(props.businessInfo))
})

const updateBusiness = async() => {
  isSaveButtonDisabled.value = true
  await auth.updateBusiness({
    businessInfo: businessInfo.value,
    update: {
      name: businessInfo.value.name,
      phone: businessInfo.value.phone,
      wifi: businessInfo.value.wifi,
    },
  })

  onClose()
}

const onClose = () => {
  isSaveButtonDisabled.value = false
  emit('close')
}

const onClickFileSelect = () => {
  menuImageFileInput.value.click()
}
const onFileSelected = (e) => {
  const selectedFile = e.target.files[0]
  resizeImage({ file: selectedFile, maxSize: 400 })
    .then(async(resizedImage) => {
      uploadImage.value = URL.createObjectURL(resizedImage)
      await menu.setBusinessLogo({
        file: resizedImage,
      })
    })
    .catch((err) => {
      console.error(err)
    })
}

const menuItemImage = computed(() => {
  const { logo } = businessInfo.value
  if (!logo)
    return false

  return `https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${logo}`
})

const isMenuItemImageShow = computed(() => {
  if (!menuItemImage.value && !uploadImage.value)
    return false
  else if (isImageHover.value)
    return false

  return true
})
</script>
