import Ext_MessageBox from './Ext/MessageBox.js';
import ElementParser from './ElementParser.js';

export default class EWCMessagebox extends Ext_MessageBox {
  constructor() {
    super ([], []);
    this.xtype = 'messagebox';
  }
}
window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
