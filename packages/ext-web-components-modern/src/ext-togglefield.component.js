import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTogglefield extends Ext_form_Toggle {
  constructor() {
    super ([], []);
    this.xtype = 'togglefield';
  }
}
try {
  window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));
}
catch(e) {
  window.customElements.define('ext-togglefield', EWCTogglefield);
}
