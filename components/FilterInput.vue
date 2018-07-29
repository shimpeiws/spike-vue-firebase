<template lang="html">
  <div class="input-container">
    <form class="field is-grouped" @submit.prevent="doPost">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="What's happening?" v-model="filterParams">
      </p>
      <p class="control">
        <button class="button is-primary">
          Post
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      filterParams: ''
    }
  },
  methods: {
    async doPost () {
      this.$store.dispatch('SET_FILTER', {filterParams: this.filterParams})
      this.filterParams = ''
    }
  }
}
</script>

<style scoped>
.input-container {
  height: calc(100vh - 76px);
}
</style>
