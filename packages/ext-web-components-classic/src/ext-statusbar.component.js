import Ext_ux_StatusBar from './Ext/ux/StatusBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCStatusbar extends Ext_ux_StatusBar {
  constructor() {
    super ([], []);
    this.xtype = 'statusbar';
  }
}
try {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', ElementParser.withParsedCallback(EWCStatusbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', EWCStatusbar);
  }
}
