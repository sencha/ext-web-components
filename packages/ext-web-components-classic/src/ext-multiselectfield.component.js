import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMultiselectfield extends Ext_ux_Multiselect {
  constructor() {
    super ([], []);
    this.xtype = 'multiselectfield';
  }
}
try {
  window.customElements.define('ext-multiselectfield', ElementParser.withParsedCallback(EWCMultiselectfield));
}
catch(e) {
  window.customElements.define('ext-multiselectfield', EWCMultiselectfield);
}
