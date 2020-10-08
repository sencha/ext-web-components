import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSpinuptrigger extends Ext_field_trigger_SpinUp {
  constructor() {
    super ([], []);
    this.xtype = 'spinuptrigger';
  }
}
try {
  if (window.customElements.get('ext-spinuptrigger') == undefined) {
    window.customElements.define('ext-spinuptrigger', ElementParser.withParsedCallback(EWCSpinuptrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-spinuptrigger') == undefined) {
    window.customElements.define('ext-spinuptrigger', EWCSpinuptrigger);
  }
}
