import Vue from 'vue'
import App from './App.vue'

import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';


Vue.config.productionTip = false

Ext.onReady(function() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});
