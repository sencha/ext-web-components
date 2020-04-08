import Ext_toolbar_Item from './Ext/toolbar/Item.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTbitem extends Ext_toolbar_Item {
  constructor() {
    super ([], []);
    this.xtype = 'tbitem';
  }
}
try {
  if (window.customElements.get('ext-tbitem') == undefined) {
    window.customElements.define('ext-tbitem', ElementParser.withParsedCallback(EWCTbitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-tbitem') == undefined) {
    window.customElements.define('ext-tbitem', EWCTbitem);
  }
}
