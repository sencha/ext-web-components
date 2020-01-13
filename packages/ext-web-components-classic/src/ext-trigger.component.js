import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './ElementParser.js';

export default class EWCTrigger extends Ext_form_Trigger {
  constructor() {
    super ([], []);
    this.xtype = 'trigger';
  }
}
window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
