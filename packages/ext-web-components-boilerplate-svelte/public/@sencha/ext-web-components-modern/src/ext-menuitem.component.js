import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import ElementParser from './ElementParser.js';

export default class EWCMenuitem extends Ext_menu_TextItem {
  constructor() {
    super ([], []);
    this.xtype = 'menuitem';
  }
}
try {
  window.customElements.define('ext-menuitem', ElementParser.withParsedCallback(EWCMenuitem));
}
catch(e) {
  window.customElements.define('ext-menuitem', EWCMenuitem);
}
