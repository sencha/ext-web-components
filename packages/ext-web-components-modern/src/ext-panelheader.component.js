import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPanelheader extends Ext_panel_Header {
  constructor() {
    super ([], []);
    this.xtype = 'panelheader';
  }
}
try {
  if (window.customElements.get('ext-panelheader') == undefined) {
    window.customElements.define('ext-panelheader', ElementParser.withParsedCallback(EWCPanelheader));
  }
}
catch(e) {
  if (window.customElements.get('ext-panelheader') == undefined) {
    window.customElements.define('ext-panelheader', EWCPanelheader);
  }
}
