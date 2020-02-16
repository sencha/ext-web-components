import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMultiselect extends Ext_ux_Multiselect {
  constructor() {
    super ([], []);
    this.xtype = 'multiselect';
  }
}
try {
  window.customElements.define('ext-multiselect', ElementParser.withParsedCallback(EWCMultiselect));
}
catch(e) {
  window.customElements.define('ext-multiselect', EWCMultiselect);
}
