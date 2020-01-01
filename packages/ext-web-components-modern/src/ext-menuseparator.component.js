import Ext_menu_Separator from './Ext/menu/Separator.js';
import ElementParser from './ElementParser.js';

export default class EWCMenuseparator extends Ext_menu_Separator {
  constructor() {
    super ([], []);
    this.xtype = 'menuseparator';
  }
}
window.customElements.define('ext-menuseparator', ElementParser.withParsedCallback(EWCMenuseparator));
