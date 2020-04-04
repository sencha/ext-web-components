import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './common/ElementParser.js';

export default class EWCHeader extends Ext_panel_Header {
  constructor() {
    super ([], []);
    this.xtype = 'header';
  }
}
try {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));
  }
}
catch(e) {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', EWCHeader);
  }
}
