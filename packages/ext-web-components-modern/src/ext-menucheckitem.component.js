import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import ElementParser from './ElementParser.js';

export default class EWCMenucheckitem extends Ext_menu_CheckItem {
  constructor() {
    super ([], []);
    this.xtype = 'menucheckitem';
  }
}
try {
  window.customElements.define('ext-menucheckitem', ElementParser.withParsedCallback(EWCMenucheckitem));
}
catch(e) {
  window.customElements.define('ext-menucheckitem', EWCMenucheckitem);
}
