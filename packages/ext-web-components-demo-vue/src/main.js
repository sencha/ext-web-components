import Vue from 'vue'
import App from './App.vue'

import '@sencha/ext-components/lib/ext-button.component';
import '@sencha/ext-components/lib/ext-panel.component';

Vue.config.productionTip = false

Ext.onReady(function() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});
