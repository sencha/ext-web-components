import Ext_window_MessageBox from './Ext/window/MessageBox.js';
import ElementParser from './ElementParser.js';

export default class EWCMessagebox extends Ext_window_MessageBox {
  constructor() {
    super ([], []);
    this.xtype = 'messagebox';
  }
}
try {
  window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-messagebox', EWCMessagebox);
}
