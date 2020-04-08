import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFieldset extends Ext_form_FieldSet {
  constructor() {
    super ([], []);
    this.xtype = 'fieldset';
  }
}
try {
  if (window.customElements.get('ext-fieldset') == undefined) {
    window.customElements.define('ext-fieldset', ElementParser.withParsedCallback(EWCFieldset));
  }
}
catch(e) {
  if (window.customElements.get('ext-fieldset') == undefined) {
    window.customElements.define('ext-fieldset', EWCFieldset);
  }
}
