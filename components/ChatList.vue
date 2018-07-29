<template lang="html">
  <div class="list">
    <ul class="chats">
        <p>
            Chat Count = {{chats.length}}
        </p>
        <Chat class="chat" :chat="chat" :key="chat['.key']" v-for="chat in chats" />
    </ul>
  </div>
</template>

<script>
import Chat from '~/components/Chat.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Chat
  },
  computed: {
    ...mapGetters(['chats'])
  }
}
</script>

<style scoped>
.list {
  height: calc(100vh - 76px);
}

.list .chats{
  height: calc(100% - 36px);
  overflow-y: auto;
}

@keyframes slideIn {
  0% {opacity: 0.0}
  100% {opacity: 1.0}
}
</style>
