<template lang="html">
  <li class="media">
    <div class="media-content">
      <div class="content">
        <p>
          key = {{chat[".key"]}}
          name = <strong>{{chat.name}}</strong>
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    chat: Object
  }
}
</script>

<style lang="css">
</style>
