<script setup>
import { ref, onMounted } from 'vue'
import { userManager } from '@/auth/cognito.js'

const isAuthenticated = ref(false)

function signIn() {
  userManager.signinRedirect()
}

function signOut() {
  userManager.signoutRedirect()
}

onMounted(async () => {
  const user = await userManager.getUser()
  isAuthenticated.value = !!(user && !user.expired)
})
</script>

<template>
  <div class="login-page">
    <h1>Welcome to MBB App</h1>
    <button v-if="isAuthenticated" @click="signOut">Logout</button>
    <button v-else @click="signIn">Login with Cognito</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 16px;
}
</style>
