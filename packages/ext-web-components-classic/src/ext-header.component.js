import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCHeader extends Ext_panel_Header {
  constructor() {
    super ([], []);
    this.xtype = 'header';
  }
}
try {
  window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));
}
catch(e) {
  window.customElements.define('ext-header', EWCHeader);
}
