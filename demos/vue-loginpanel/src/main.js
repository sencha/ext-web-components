import Vue from 'vue'
import App from './App.vue'
import '@sencha/ext-web-components-modern';

Vue.config.productionTip = false

Ext.onReady(function() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});