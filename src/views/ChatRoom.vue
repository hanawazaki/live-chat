<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>
<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composable/getUser";
import Navbar from "../components/Navbar";
import NewChatRoom from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
  components: { Navbar, NewChatRoom, ChatWindow },
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
