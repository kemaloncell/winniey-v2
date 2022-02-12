import { computed, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Auth, CognitoUser } from '@aws-amplify/auth'
import { DataStore } from '@aws-amplify/datastore'
import { Business } from '~/src/models'

export const useAuthStore = defineStore('auth', () => {
  const user = ref < CognitoUser > ({})
  const business = ref({})

  const currentUser = computed(() => {
    return user.value
  })
  const currentBusiness = computed(() => {
    return business.value
  })
  const isAuthenticated = computed(() => {
    return user.value?.username
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
    business.value = businessResult[0] || {}
  }
  async function setCurrentUser() {
    try {
      user.value = await Auth.currentAuthenticatedUser()

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
      user.value = {}
    }
    catch (err) {
    }
  }

  return {
    setCurrentUser,
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
