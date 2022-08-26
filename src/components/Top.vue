<template>
  <div class="Wrapper">
    <img src="../assets/top.png" alt="" class="top">
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  width: 100%;
}

.Wrapper::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: 8%;
  top: 29%;
  height: 4px;
  width: 305px;
  background: white;
}
</style>
