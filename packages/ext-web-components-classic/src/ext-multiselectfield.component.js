import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './ElementParser.js';

export default class EWCMultiselectfield extends Ext_ux_Multiselect {
  constructor() {
    super ([], []);
    this.xtype = 'multiselectfield';
  }
}
window.customElements.define('ext-multiselectfield', ElementParser.withParsedCallback(EWCMultiselectfield));
