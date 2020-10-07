import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSpindowntrigger extends Ext_field_trigger_SpinDown {
  constructor() {
    super ([], []);
    this.xtype = 'spindowntrigger';
  }
}
try {
  if (window.customElements.get('ext-spindowntrigger') == undefined) {
    window.customElements.define('ext-spindowntrigger', ElementParser.withParsedCallback(EWCSpindowntrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-spindowntrigger') == undefined) {
    window.customElements.define('ext-spindowntrigger', EWCSpindowntrigger);
  }
}
