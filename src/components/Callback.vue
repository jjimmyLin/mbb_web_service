<template>
  <div>
    <h2>Authentication Callback</h2>
    <p>Hello: <pre id="email">{{ user?.profile?.email || "Loading..." }}</pre></p>
    <p>Access token: <pre id="access-token">{{ user?.access_token || "N/A" }}</pre></p>
    <p>ID token: <pre id="id-token">{{ user?.id_token || "N/A" }}</pre></p>
    <p>Refresh token: <pre id="refresh-token">{{ user?.refresh_token || "N/A" }}</pre></p>
  </div>
</template>

<script>
import { userManager } from "../auth/cognito";

export default {
  name: "Callback",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const user = await userManager.signinCallback();
      this.user = user;
    } catch (error) {
      console.error("Callback error:", error);
    }
  },
};
</script>