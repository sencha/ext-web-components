import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenuradioitem extends Ext_menu_RadioItem {
  constructor() {
    super ([], []);
    this.xtype = 'menuradioitem';
  }
}
try {
  if (window.customElements.get('ext-menuradioitem') == undefined) {
    window.customElements.define('ext-menuradioitem', ElementParser.withParsedCallback(EWCMenuradioitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-menuradioitem') == undefined) {
    window.customElements.define('ext-menuradioitem', EWCMenuradioitem);
  }
}
