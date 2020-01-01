import Ext_menu_Menu from './Ext/menu/Menu.js';
import ElementParser from './ElementParser.js';

export default class EWCMenu extends Ext_menu_Menu {
  constructor() {
    super ([], []);
    this.xtype = 'menu';
  }
}
window.customElements.define('ext-menu', ElementParser.withParsedCallback(EWCMenu));
