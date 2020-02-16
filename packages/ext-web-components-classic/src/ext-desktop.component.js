import Ext_ux_desktop_Desktop from './Ext/ux/desktop/Desktop.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDesktop extends Ext_ux_desktop_Desktop {
  constructor() {
    super ([], []);
    this.xtype = 'desktop';
  }
}
try {
  window.customElements.define('ext-desktop', ElementParser.withParsedCallback(EWCDesktop));
}
catch(e) {
  window.customElements.define('ext-desktop', EWCDesktop);
}
