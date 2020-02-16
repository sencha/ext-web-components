import Ext_Tab from './Ext/Tab.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTab extends Ext_Tab {
  constructor() {
    super ([], []);
    this.xtype = 'tab';
  }
}
try {
  window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
}
catch(e) {
  window.customElements.define('ext-tab', EWCTab);
}
