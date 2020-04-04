import Ext_form_Spinner from './Ext/form/Spinner.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSpinnerfield extends Ext_form_Spinner {
  constructor() {
    super ([], []);
    this.xtype = 'spinnerfield';
  }
}
try {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', ElementParser.withParsedCallback(EWCSpinnerfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', EWCSpinnerfield);
  }
}
