<template>
  <div class="container">
    <div class="columns" v-if="isLoaded">
      <ChatList />
    </div>
    <div class="loading" v-else>
      <p>Loading</p>
    </div>
  </div>
</template>

<script>
import ChatList from '~/components/ChatList.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    ChatList
  },
  async mounted() {
    await this.$store.dispatch('INIT_CHATS');
    this.isLoaded = true;
  },
  computed: {
    ...mapGetters(['chats'])
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

