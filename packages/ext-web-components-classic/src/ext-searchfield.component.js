import Ext_ux_form_SearchField from './Ext/ux/form/SearchField.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSearchfield extends Ext_ux_form_SearchField {
  constructor() {
    super ([], []);
    this.xtype = 'searchfield';
  }
}
try {
  if (window.customElements.get('ext-searchfield') == undefined) {
    window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-searchfield') == undefined) {
    window.customElements.define('ext-searchfield', EWCSearchfield);
  }
}
