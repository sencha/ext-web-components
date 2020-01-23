import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import ElementParser from './ElementParser.js';

export default class EWCExpandtrigger extends Ext_field_trigger_Expand {
  constructor() {
    super ([], []);
    this.xtype = 'expandtrigger';
  }
}
try {
  window.customElements.define('ext-expandtrigger', ElementParser.withParsedCallback(EWCExpandtrigger));
}
catch(e) {
  window.customElements.define('ext-expandtrigger', EWCExpandtrigger);
}
