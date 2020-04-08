import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTool extends Ext_panel_Tool {
  constructor() {
    super ([], []);
    this.xtype = 'tool';
  }
}
try {
  if (window.customElements.get('ext-tool') == undefined) {
    window.customElements.define('ext-tool', ElementParser.withParsedCallback(EWCTool));
  }
}
catch(e) {
  if (window.customElements.get('ext-tool') == undefined) {
    window.customElements.define('ext-tool', EWCTool);
  }
}
