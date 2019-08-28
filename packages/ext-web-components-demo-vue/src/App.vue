<template>
  <ext-panel title="Sencha ExtWebComponents 7.0 in Vue.js" layout="vbox" fitToParent="true">
    <div id="center">
      <img alt="Vue logo" src="./assets/logo.png">
      <div>Vue.JS</div>
    </div>
    <HelloWorld msg="Employees"/>
  </ext-panel>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#center {
  margin-top: 20px;
  text-align: center;
  margin-bottom:15px;
  font-size:24px;
}
</style>
