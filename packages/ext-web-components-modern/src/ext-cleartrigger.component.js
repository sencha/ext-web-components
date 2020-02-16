import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCleartrigger extends Ext_field_trigger_Clear {
  constructor() {
    super ([], []);
    this.xtype = 'cleartrigger';
  }
}
try {
  window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));
}
catch(e) {
  window.customElements.define('ext-cleartrigger', EWCCleartrigger);
}
