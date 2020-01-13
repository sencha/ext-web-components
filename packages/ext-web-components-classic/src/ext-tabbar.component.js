import Ext_tab_Bar from './Ext/tab/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCTabbar extends Ext_tab_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'tabbar';
  }
}
window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
