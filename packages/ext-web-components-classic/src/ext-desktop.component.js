import Ext_ux_desktop_Desktop from './Ext/ux/desktop/Desktop.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDesktop extends Ext_ux_desktop_Desktop {
  constructor() {
    super ([], []);
    this.xtype = 'desktop';
  }
}
try {
  if (window.customElements.get('ext-desktop') == undefined) {
    window.customElements.define('ext-desktop', ElementParser.withParsedCallback(EWCDesktop));
  }
}
catch(e) {
  if (window.customElements.get('ext-desktop') == undefined) {
    window.customElements.define('ext-desktop', EWCDesktop);
  }
}
