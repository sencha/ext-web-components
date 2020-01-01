import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './ElementParser.js';

export default class EWCPaneltool extends Ext_panel_Tool {
  constructor() {
    super ([], []);
    this.xtype = 'paneltool';
  }
}
window.customElements.define('ext-paneltool', ElementParser.withParsedCallback(EWCPaneltool));
