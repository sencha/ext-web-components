import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatetrigger extends Ext_field_trigger_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datetrigger';
  }
}
try {
  window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
}
catch(e) {
  window.customElements.define('ext-datetrigger', EWCDatetrigger);
}
