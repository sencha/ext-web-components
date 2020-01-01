import Ext_Toolbar from './Ext/Toolbar.js';
import ElementParser from './ElementParser.js';

export default class EWCToolbar extends Ext_Toolbar {
  constructor() {
    super ([], []);
    this.xtype = 'toolbar';
  }
}
window.customElements.define('ext-toolbar', ElementParser.withParsedCallback(EWCToolbar));
