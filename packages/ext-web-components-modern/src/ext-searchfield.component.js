import Ext_form_Search from './Ext/form/Search.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSearchfield extends Ext_form_Search {
  constructor() {
    super ([], []);
    this.xtype = 'searchfield';
  }
}
try {
  window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));
}
catch(e) {
  window.customElements.define('ext-searchfield', EWCSearchfield);
}
