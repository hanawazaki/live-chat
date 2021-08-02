<template lang="">
    <div class="signup">
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <button> Login </button>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props) {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { handleSubmit, email, password };
  },
};
</script>
<style lang="">
</style>