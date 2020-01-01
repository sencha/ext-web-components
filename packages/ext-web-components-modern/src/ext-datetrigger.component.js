import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatetrigger extends Ext_field_trigger_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datetrigger';
  }
}
window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
