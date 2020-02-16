import Ext_Toolbar from './Ext/Toolbar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCToolbar extends Ext_Toolbar {
  constructor() {
    super ([], []);
    this.xtype = 'toolbar';
  }
}
try {
  window.customElements.define('ext-toolbar', ElementParser.withParsedCallback(EWCToolbar));
}
catch(e) {
  window.customElements.define('ext-toolbar', EWCToolbar);
}
