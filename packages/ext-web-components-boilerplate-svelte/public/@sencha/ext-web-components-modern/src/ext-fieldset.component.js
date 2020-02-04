import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import ElementParser from './ElementParser.js';

export default class EWCFieldset extends Ext_form_FieldSet {
  constructor() {
    super ([], []);
    this.xtype = 'fieldset';
  }
}
try {
  window.customElements.define('ext-fieldset', ElementParser.withParsedCallback(EWCFieldset));
}
catch(e) {
  window.customElements.define('ext-fieldset', EWCFieldset);
}
