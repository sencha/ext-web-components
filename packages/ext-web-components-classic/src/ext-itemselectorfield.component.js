import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './common/ElementParser.js';

export default class EWCItemselectorfield extends Ext_ux_ItemSelector {
  constructor() {
    super ([], []);
    this.xtype = 'itemselectorfield';
  }
}
try {
  if (window.customElements.get('ext-itemselectorfield') == undefined) {
    window.customElements.define('ext-itemselectorfield', ElementParser.withParsedCallback(EWCItemselectorfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-itemselectorfield') == undefined) {
    window.customElements.define('ext-itemselectorfield', EWCItemselectorfield);
  }
}
