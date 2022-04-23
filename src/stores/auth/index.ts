import { computed, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CognitoUser } from '@aws-amplify/auth'
import { Auth } from '@aws-amplify/auth'
import { DataStore } from '@aws-amplify/datastore'
import { Business } from '~/models'

export const useAuthStore = defineStore('auth', () => {
  const user = ref < CognitoUser > ({})
  const business = ref({})

  const currentUser = computed(() => {
    return user.value
  })
  const currentUserUsername = computed(() => {
    return user?.value?.username
  })
  const currentBusiness = computed(() => {
    return business.value
  })
  const isAuthenticated = computed(() => {
    return user.value?.username
  })
  const getIdToken = computed(() => {
    return user.value?.signInUserSession?.idToken?.jwtToken
  })

  const isBusiness = computed(() => {
    return user.value?.signInUserSession?.idToken?.payload[
      'cognito:groups'
    ]?.find(group => group === 'business')
  })
  async function setCurrentBusiness() {
    const businessResult = await DataStore.query(
      Business,
      businessItem => businessItem.owner('eq', user.value?.username),
    )
    business.value = JSON.parse(JSON.stringify(businessResult[0])) || {}
  }
  async function setCurrentUser() {
    try {
      user.value = await Auth.currentAuthenticatedUser()
      localStorage.setItem('id_token', getIdToken.value)
      if (user.value)
        await setCurrentBusiness()
    }
    catch {}
  }

  async function signUp(email, password) {
    try {
      user.value = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      })

      return true
    }
    catch (err) {

    }
  }

  async function confirmEmail(email, code) {
    try {
      await Auth.confirmSignUp(email, code)

      return true
    }
    catch (err) {
    }
  }

  async function login(email, password) {
    try {
      await Auth.signIn(email, password)
      await setCurrentUser()

      return true
    }
    catch (err) {
      if (err.name === 'UserNotConfirmedException')
        return 'UserNotConfirmedException'
    }
  }

  async function logout() {
    try {
      await Auth.signOut()
      localStorage.removeItem('id_token')
      user.value = {}
    }
    catch (err) {
    }
  }

  async function updateBusiness(payload) {
    const original = await DataStore.query(Business, payload.businessInfo.id)
    const result = await DataStore.save(
      Business.copyOf(original, (updated) => {
        Object.entries(payload.update).forEach(([key, value]) => {
          updated[key] = value
        })
      }),
    )

    if (result) {
      Object.entries(payload.update).forEach(([key, value]) => {
        business.value[key] = value
      })
    }
  }

  return {
    setCurrentUser,
    currentUserUsername,
    updateBusiness,
    signUp,
    confirmEmail,
    login,
    logout,
    currentUser,
    isAuthenticated,
    isBusiness,
    currentBusiness,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
