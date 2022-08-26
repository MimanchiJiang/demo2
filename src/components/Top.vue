<template>
  <img src="../assets/top.png" alt="" class="top">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  width: 100%;
}
</style>
