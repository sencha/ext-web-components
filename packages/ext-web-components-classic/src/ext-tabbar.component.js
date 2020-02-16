import Ext_tab_Bar from './Ext/tab/Bar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTabbar extends Ext_tab_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'tabbar';
  }
}
try {
  window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
}
catch(e) {
  window.customElements.define('ext-tabbar', EWCTabbar);
}
