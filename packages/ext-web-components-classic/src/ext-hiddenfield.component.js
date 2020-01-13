import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './ElementParser.js';

export default class EWCHiddenfield extends Ext_form_Hidden {
  constructor() {
    super ([], []);
    this.xtype = 'hiddenfield';
  }
}
window.customElements.define('ext-hiddenfield', ElementParser.withParsedCallback(EWCHiddenfield));
