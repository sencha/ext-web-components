import Ext_Panel from './Ext/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCPanel extends Ext_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'panel';
  }
}
window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
