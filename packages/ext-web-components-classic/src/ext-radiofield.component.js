import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './ElementParser.js';

export default class EWCRadiofield extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radiofield';
  }
}
window.customElements.define('ext-radiofield', ElementParser.withParsedCallback(EWCRadiofield));
