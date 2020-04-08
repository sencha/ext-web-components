import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTriggerfield extends Ext_form_Trigger {
  constructor() {
    super ([], []);
    this.xtype = 'triggerfield';
  }
}
try {
  if (window.customElements.get('ext-triggerfield') == undefined) {
    window.customElements.define('ext-triggerfield', ElementParser.withParsedCallback(EWCTriggerfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-triggerfield') == undefined) {
    window.customElements.define('ext-triggerfield', EWCTriggerfield);
  }
}
