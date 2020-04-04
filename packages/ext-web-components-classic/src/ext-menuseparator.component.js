import Ext_menu_Separator from './Ext/menu/Separator.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenuseparator extends Ext_menu_Separator {
  constructor() {
    super ([], []);
    this.xtype = 'menuseparator';
  }
}
try {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', ElementParser.withParsedCallback(EWCMenuseparator));
  }
}
catch(e) {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', EWCMenuseparator);
  }
}
