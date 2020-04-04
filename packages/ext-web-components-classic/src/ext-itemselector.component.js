import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './common/ElementParser.js';

export default class EWCItemselector extends Ext_ux_ItemSelector {
  constructor() {
    super ([], []);
    this.xtype = 'itemselector';
  }
}
try {
  if (window.customElements.get('ext-itemselector') == undefined) {
    window.customElements.define('ext-itemselector', ElementParser.withParsedCallback(EWCItemselector));
  }
}
catch(e) {
  if (window.customElements.get('ext-itemselector') == undefined) {
    window.customElements.define('ext-itemselector', EWCItemselector);
  }
}
