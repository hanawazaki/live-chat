<template>
  <div class="container">
    <Navbar />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import getUser from "../composable/getUser";
import { watch } from "vue";

export default {
  components: { Navbar },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>
