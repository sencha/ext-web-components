import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenucheckitem extends Ext_menu_CheckItem {
  constructor() {
    super ([], []);
    this.xtype = 'menucheckitem';
  }
}
try {
  if (window.customElements.get('ext-menucheckitem') == undefined) {
    window.customElements.define('ext-menucheckitem', ElementParser.withParsedCallback(EWCMenucheckitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-menucheckitem') == undefined) {
    window.customElements.define('ext-menucheckitem', EWCMenucheckitem);
  }
}
