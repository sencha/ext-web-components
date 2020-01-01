import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './ElementParser.js';

export default class EWCCleartrigger extends Ext_field_trigger_Clear {
  constructor() {
    super ([], []);
    this.xtype = 'cleartrigger';
  }
}
window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));
