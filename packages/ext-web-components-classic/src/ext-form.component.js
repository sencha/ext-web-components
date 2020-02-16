import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCForm extends Ext_form_FormPanel {
  constructor() {
    super ([], []);
    this.xtype = 'form';
  }
}
try {
  window.customElements.define('ext-form', ElementParser.withParsedCallback(EWCForm));
}
catch(e) {
  window.customElements.define('ext-form', EWCForm);
}
