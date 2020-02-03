import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './ElementParser.js';

export default class EWCTool extends Ext_panel_Tool {
  constructor() {
    super ([], []);
    this.xtype = 'tool';
  }
}
try {
  window.customElements.define('ext-tool', ElementParser.withParsedCallback(EWCTool));
}
catch(e) {
  window.customElements.define('ext-tool', EWCTool);
}
