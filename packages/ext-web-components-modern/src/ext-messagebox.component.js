import Ext_MessageBox from './Ext/MessageBox.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMessagebox extends Ext_MessageBox {
  constructor() {
    super ([], []);
    this.xtype = 'messagebox';
  }
}
try {
  window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
}
catch(e) {
  window.customElements.define('ext-messagebox', EWCMessagebox);
}
