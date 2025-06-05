<template>
  <div>
    <button id="signIn" @click="signIn">Sign In</button>
    <button id="signOut" @click="signOut">Log Out</button>
  </div>
</template>

<script>
import { userManager, signOutRedirect } from "../auth/cognito";

export default {
  name: "AuthButton",
  methods: {
    async signIn() {
      await userManager.signinRedirect();
    },
    async signOut() {
      await signOutRedirect();
    },
  },
};
</script>