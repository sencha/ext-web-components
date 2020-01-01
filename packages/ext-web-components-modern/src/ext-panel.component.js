import Ext_panel_Panel from './Ext/panel/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCPanel extends Ext_panel_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'panel';
  }
}
window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
