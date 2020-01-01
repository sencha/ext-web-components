import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './ElementParser.js';

export default class EWCPanelheader extends Ext_panel_Header {
  constructor() {
    super ([], []);
    this.xtype = 'panelheader';
  }
}
window.customElements.define('ext-panelheader', ElementParser.withParsedCallback(EWCPanelheader));
