<template lang="">
    <div class="signup">
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{error}}</div>
            <button> Sign Up </button>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
import useSignup from "../composable/useSignup";

export default {
  setup(props,context) {
    const { error, signup } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        // console.log("user logged in!");
        context.emit("signup");
      }
    };

    return { handleSubmit, displayName, email, password, error };
  },
};
</script>
<style lang="">
</style>