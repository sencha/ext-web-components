import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './common/ElementParser.js';

export default class EWCHidden extends Ext_form_Hidden {
  constructor() {
    super ([], []);
    this.xtype = 'hidden';
  }
}
try {
  if (window.customElements.get('ext-hidden') == undefined) {
    window.customElements.define('ext-hidden', ElementParser.withParsedCallback(EWCHidden));
  }
}
catch(e) {
  if (window.customElements.get('ext-hidden') == undefined) {
    window.customElements.define('ext-hidden', EWCHidden);
  }
}
