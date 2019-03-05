import Vue from 'vue'
import App from './App.vue'
//import '@sencha/ext-components';
import { ExtButtonComponent } from '@sencha/ext-components/lib/ext-button.component';
import { ExtPanelComponent  } from '@sencha/ext-components/lib/ext-panel.component';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
