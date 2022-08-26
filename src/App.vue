<template>
  <div id="app">
    <Top />
    <CountDown />
    <ButtonBar />
  </div>
</template>

<script>
import Top from './components/Top.vue'
import ButtonBar from './components/ButtonBar.vue'
import CountDown from './components/CountDown.vue';

export default {
  name: 'App',
  components: {
    Top, ButtonBar, CountDown
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: rgb(230, 230, 230);
}
</style>
