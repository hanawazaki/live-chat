<template lang="">
    <div class="signup">
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
              <div class="error">
                {{error}}
              </div>
            <button> Login </button>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
import useLogin from "../composable/useLogin";

export default {
  setup(props,context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in!");
        context.emit('login')
      }
    };

    return { handleSubmit, email, password, error };
  },
};
</script>
<style lang="">
</style>