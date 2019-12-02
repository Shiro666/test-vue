<template>
  <div id="app">
    <div class="pixi-container"></div>
    <router-view/>
  </div>
</template>

<script>
import Init from './game/init';
export default {
  data() {
    return {}
  },

  mounted() {
    Init.loadImg();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
