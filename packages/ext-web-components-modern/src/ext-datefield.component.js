import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './ElementParser.js';

export default class EWCDatefield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datefield';
  }
}
window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
