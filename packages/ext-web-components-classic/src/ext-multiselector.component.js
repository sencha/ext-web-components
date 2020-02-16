import Ext_view_MultiSelector from './Ext/view/MultiSelector.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMultiselector extends Ext_view_MultiSelector {
  constructor() {
    super ([], []);
    this.xtype = 'multiselector';
  }
}
try {
  window.customElements.define('ext-multiselector', ElementParser.withParsedCallback(EWCMultiselector));
}
catch(e) {
  window.customElements.define('ext-multiselector', EWCMultiselector);
}
