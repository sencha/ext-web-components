import Ext_form_Url from './Ext/form/Url.js';
import ElementParser from './ElementParser.js';

export default class EWCUrlfield extends Ext_form_Url {
  constructor() {
    super ([], []);
    this.xtype = 'urlfield';
  }
}
window.customElements.define('ext-urlfield', ElementParser.withParsedCallback(EWCUrlfield));
