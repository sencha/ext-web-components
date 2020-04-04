import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCForm extends Ext_form_FormPanel {
  constructor() {
    super ([], []);
    this.xtype = 'form';
  }
}
try {
  if (window.customElements.get('ext-form') == undefined) {
    window.customElements.define('ext-form', ElementParser.withParsedCallback(EWCForm));
  }
}
catch(e) {
  if (window.customElements.get('ext-form') == undefined) {
    window.customElements.define('ext-form', EWCForm);
  }
}
