import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCHidden extends Ext_form_Hidden {
  constructor() {
    super ([], []);
    this.xtype = 'hidden';
  }
}
try {
  window.customElements.define('ext-hidden', ElementParser.withParsedCallback(EWCHidden));
}
catch(e) {
  window.customElements.define('ext-hidden', EWCHidden);
}
