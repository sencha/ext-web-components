import Ext_window_MessageBox from './Ext/window/MessageBox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMessagebox extends Ext_window_MessageBox {
  constructor() {
    super ([], []);
    this.xtype = 'messagebox';
  }
}
try {
  if (window.customElements.get('ext-messagebox') == undefined) {
    window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
  }
}
catch(e) {
  if (window.customElements.get('ext-messagebox') == undefined) {
    window.customElements.define('ext-messagebox', EWCMessagebox);
  }
}
