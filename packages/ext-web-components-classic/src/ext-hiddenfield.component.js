import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './common/ElementParser.js';

export default class EWCHiddenfield extends Ext_form_Hidden {
  constructor() {
    super ([], []);
    this.xtype = 'hiddenfield';
  }
}
try {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', ElementParser.withParsedCallback(EWCHiddenfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', EWCHiddenfield);
  }
}
