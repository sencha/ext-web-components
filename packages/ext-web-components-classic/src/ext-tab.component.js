import Ext_tab_Tab from './Ext/tab/Tab.js';
import ElementParser from './ElementParser.js';

export default class EWCTab extends Ext_tab_Tab {
  constructor() {
    super ([], []);
    this.xtype = 'tab';
  }
}
try {
  window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-tab', EWCTab);
}
