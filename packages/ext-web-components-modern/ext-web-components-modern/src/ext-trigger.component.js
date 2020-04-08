import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTrigger extends Ext_field_trigger_Trigger {
  constructor() {
    super ([], []);
    this.xtype = 'trigger';
  }
}
try {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', EWCTrigger);
  }
}
