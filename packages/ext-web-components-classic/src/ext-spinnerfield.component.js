import Ext_form_Spinner from './Ext/form/Spinner.js';
import ElementParser from './ElementParser.js';

export default class EWCSpinnerfield extends Ext_form_Spinner {
  constructor() {
    super ([], []);
    this.xtype = 'spinnerfield';
  }
}
window.customElements.define('ext-spinnerfield', ElementParser.withParsedCallback(EWCSpinnerfield));
