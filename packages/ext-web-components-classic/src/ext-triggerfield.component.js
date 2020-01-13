import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './ElementParser.js';

export default class EWCTriggerfield extends Ext_form_Trigger {
  constructor() {
    super ([], []);
    this.xtype = 'triggerfield';
  }
}
window.customElements.define('ext-triggerfield', ElementParser.withParsedCallback(EWCTriggerfield));
