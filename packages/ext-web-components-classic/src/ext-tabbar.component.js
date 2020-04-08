import Ext_tab_Bar from './Ext/tab/Bar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTabbar extends Ext_tab_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'tabbar';
  }
}
try {
  if (window.customElements.get('ext-tabbar') == undefined) {
    window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-tabbar') == undefined) {
    window.customElements.define('ext-tabbar', EWCTabbar);
  }
}
