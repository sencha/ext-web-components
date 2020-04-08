import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMultiselect extends Ext_ux_Multiselect {
  constructor() {
    super ([], []);
    this.xtype = 'multiselect';
  }
}
try {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', ElementParser.withParsedCallback(EWCMultiselect));
  }
}
catch(e) {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', EWCMultiselect);
  }
}
