import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@sencha/ext-web-components-modern';

Ext.require([
  'Ext.layout.*',
  'Ext.data.TreeStore'
]);

Vue.config.productionTip = false

Ext.onReady(function() {
  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
});
