<template>
  <div>
    <h1>Welcome to My App</h1>
    <AuthButton />
  </div>
</template>

<script>
import AuthButton from "../components/AuthButton.vue";

export default {
  name: "Home",
  components: {
    AuthButton,
  },
};
</script>