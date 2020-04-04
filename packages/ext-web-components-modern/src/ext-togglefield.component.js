import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTogglefield extends Ext_form_Toggle {
  constructor() {
    super ([], []);
    this.xtype = 'togglefield';
  }
}
try {
  if (window.customElements.get('ext-togglefield') == undefined) {
    window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-togglefield') == undefined) {
    window.customElements.define('ext-togglefield', EWCTogglefield);
  }
}
