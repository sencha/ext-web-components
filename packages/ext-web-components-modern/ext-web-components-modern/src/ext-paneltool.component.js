import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPaneltool extends Ext_panel_Tool {
  constructor() {
    super ([], []);
    this.xtype = 'paneltool';
  }
}
try {
  if (window.customElements.get('ext-paneltool') == undefined) {
    window.customElements.define('ext-paneltool', ElementParser.withParsedCallback(EWCPaneltool));
  }
}
catch(e) {
  if (window.customElements.get('ext-paneltool') == undefined) {
    window.customElements.define('ext-paneltool', EWCPaneltool);
  }
}
