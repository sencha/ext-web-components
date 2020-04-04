import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMultiselectfield extends Ext_ux_Multiselect {
  constructor() {
    super ([], []);
    this.xtype = 'multiselectfield';
  }
}
try {
  if (window.customElements.get('ext-multiselectfield') == undefined) {
    window.customElements.define('ext-multiselectfield', ElementParser.withParsedCallback(EWCMultiselectfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-multiselectfield') == undefined) {
    window.customElements.define('ext-multiselectfield', EWCMultiselectfield);
  }
}
