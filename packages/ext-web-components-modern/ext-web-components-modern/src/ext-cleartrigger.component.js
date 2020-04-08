import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCleartrigger extends Ext_field_trigger_Clear {
  constructor() {
    super ([], []);
    this.xtype = 'cleartrigger';
  }
}
try {
  if (window.customElements.get('ext-cleartrigger') == undefined) {
    window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-cleartrigger') == undefined) {
    window.customElements.define('ext-cleartrigger', EWCCleartrigger);
  }
}
