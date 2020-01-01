import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import ElementParser from './ElementParser.js';

export default class EWCSpindowntrigger extends Ext_field_trigger_SpinDown {
  constructor() {
    super ([], []);
    this.xtype = 'spindowntrigger';
  }
}
window.customElements.define('ext-spindowntrigger', ElementParser.withParsedCallback(EWCSpindowntrigger));
