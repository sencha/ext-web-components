import Ext_TabBar from './Ext/TabBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTabbar extends Ext_TabBar {
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
