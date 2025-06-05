<template>
  <div>
    <div v-if="!user">
      <h1>Welcome to My App</h1>
      <button @click="login">Login with Cognito</button>
    </div>
    <div v-else>
      <h1>Main Page</h1>
      <p>Hello, {{ user.profile.email }}</p>
      <button @click="signOut">Logout</button>
      <!-- 功能区内容待定 -->
    </div>
  </div>
</template>

<script>
import { userManager, signOutRedirect } from "../auth/cognito";

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await userManager.getUser();
  },
  methods: {
    async login() {
      await userManager.signinRedirect();
    },
    async signOut() {
      await signOutRedirect();
    },
  },
};
</script>