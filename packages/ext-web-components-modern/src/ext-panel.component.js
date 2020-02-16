import Ext_panel_Panel from './Ext/panel/Panel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPanel extends Ext_panel_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'panel';
  }
}
try {
  window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
}
catch(e) {
  window.customElements.define('ext-panel', EWCPanel);
}
