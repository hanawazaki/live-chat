<template>
  <div>
    <form>
      <textarea
        placeholder="Type a message and press enter to send..."
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
      ></textarea>
    </form>
  </div>
</template>
<script>
import getUser from "../composable/getUser";
import useCollection from "../composable/useCollection";
import { ref } from "vue";
import { timestamp } from "../firebase/config";

export default {
  setup(props) {
    const { user } = getUser();
    const message = ref("");
    const { addDoc, error } = useCollection("messages");

    const handleSubmit = async () => {
      const chat = {
        user: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat);

      console.log(chat);
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>
<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>