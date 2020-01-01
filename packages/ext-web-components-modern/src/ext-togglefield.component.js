import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './ElementParser.js';

export default class EWCTogglefield extends Ext_form_Toggle {
  constructor() {
    super ([], []);
    this.xtype = 'togglefield';
  }
}
window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));
