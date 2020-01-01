import Ext_form_Select from './Ext/form/Select.js';
import ElementParser from './ElementParser.js';

export default class EWCSelectfield extends Ext_form_Select {
  constructor() {
    super ([], []);
    this.xtype = 'selectfield';
  }
}
window.customElements.define('ext-selectfield', ElementParser.withParsedCallback(EWCSelectfield));
