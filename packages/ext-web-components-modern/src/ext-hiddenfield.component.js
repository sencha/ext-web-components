import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCHiddenfield extends Ext_form_Hidden {
  constructor() {
    super ([], []);
    this.xtype = 'hiddenfield';
  }
}
try {
  window.customElements.define('ext-hiddenfield', ElementParser.withParsedCallback(EWCHiddenfield));
}
catch(e) {
  window.customElements.define('ext-hiddenfield', EWCHiddenfield);
}
