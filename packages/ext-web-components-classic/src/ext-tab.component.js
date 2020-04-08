import Ext_tab_Tab from './Ext/tab/Tab.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTab extends Ext_tab_Tab {
  constructor() {
    super ([], []);
    this.xtype = 'tab';
  }
}
try {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
  }
}
catch(e) {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', EWCTab);
  }
}
