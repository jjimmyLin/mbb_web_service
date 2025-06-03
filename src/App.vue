<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { userManager } from '@/auth/cognito.js'

function signIn() {
  userManager.signinRedirect()
}
</script>

<template>
  <div class="login-page">
    <h1>Welcome to MBB App</h1>
    <button @click="signIn">Sign In with Cognito</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 16px;
}
</style>
