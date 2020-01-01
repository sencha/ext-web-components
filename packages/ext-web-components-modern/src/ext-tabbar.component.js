import Ext_TabBar from './Ext/TabBar.js';
import ElementParser from './ElementParser.js';

export default class EWCTabbar extends Ext_TabBar {
  constructor() {
    super ([], []);
    this.xtype = 'tabbar';
  }
}
window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
