import Ext_Toolbar from './Ext/Toolbar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCToolbar extends Ext_Toolbar {
  constructor() {
    super ([], []);
    this.xtype = 'toolbar';
  }
}
try {
  if (window.customElements.get('ext-toolbar') == undefined) {
    window.customElements.define('ext-toolbar', ElementParser.withParsedCallback(EWCToolbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-toolbar') == undefined) {
    window.customElements.define('ext-toolbar', EWCToolbar);
  }
}
