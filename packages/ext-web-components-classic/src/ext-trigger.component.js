import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTrigger extends Ext_form_Trigger {
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
