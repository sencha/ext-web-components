import Vue from 'vue'
import App from './App.vue'
import '@sencha/ext-components';
Vue.config.ignoredElements = [
  'ext-button'
]

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
