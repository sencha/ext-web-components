import Ext_form_Search from './Ext/form/Search.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSearchfield extends Ext_form_Search {
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
