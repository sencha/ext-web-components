import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTrigger extends Ext_field_trigger_Trigger {
  constructor() {
    super ([], []);
    this.xtype = 'trigger';
  }
}
try {
  window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
}
catch(e) {
  window.customElements.define('ext-trigger', EWCTrigger);
}
