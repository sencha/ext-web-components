import Ext_menu_Menu from './Ext/menu/Menu.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenu extends Ext_menu_Menu {
  constructor() {
    super ([], []);
    this.xtype = 'menu';
  }
}
try {
  if (window.customElements.get('ext-menu') == undefined) {
    window.customElements.define('ext-menu', ElementParser.withParsedCallback(EWCMenu));
  }
}
catch(e) {
  if (window.customElements.get('ext-menu') == undefined) {
    window.customElements.define('ext-menu', EWCMenu);
  }
}
