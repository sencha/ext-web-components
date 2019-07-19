import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-dataview.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-tabpanel.component';
import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-titlebar.component';
import '@sencha/ext-web-components/lib/ext-treelist.component';

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
