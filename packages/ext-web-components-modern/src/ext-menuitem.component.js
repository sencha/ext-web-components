import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenuitem extends Ext_menu_TextItem {
  constructor() {
    super ([], []);
    this.xtype = 'menuitem';
  }
}
try {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', ElementParser.withParsedCallback(EWCMenuitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', EWCMenuitem);
  }
}
