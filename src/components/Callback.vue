<template>
  <div>
    <h2>Redirecting...</h2>
  </div>
</template>

<script>
import { userManager } from "../auth/cognito";

export default {
  name: "Callback",
  async created() {
    try {
      await userManager.signinCallback();
      this.$router.push("/"); // 重定向到主页面
    } catch (error) {
      console.error("Callback error:", error);
    }
  },
};
</script>