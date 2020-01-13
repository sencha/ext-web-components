import Ext_menu_Bar from './Ext/menu/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCMenubar extends Ext_menu_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'menubar';
  }
}
window.customElements.define('ext-menubar', ElementParser.withParsedCallback(EWCMenubar));
