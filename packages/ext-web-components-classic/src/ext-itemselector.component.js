import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './ElementParser.js';

export default class EWCItemselector extends Ext_ux_ItemSelector {
  constructor() {
    super ([], []);
    this.xtype = 'itemselector';
  }
}
try {
  window.customElements.define('ext-itemselector', ElementParser.withParsedCallback(EWCItemselector));
}
catch(e) {
  window.customElements.define('ext-itemselector', EWCItemselector);
}
