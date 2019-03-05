<template>
  <ext-panel :title="'gus'">
    <ext-button :text="'mjg'"></ext-button>
  </ext-panel>

  <!-- <div id="app-root">
    <img alt="Vue logo" src="./assets/logo.png">
       


    <HelloWorld msg="xWelcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  mounted() {
  },
  components: {
    HelloWorld
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
