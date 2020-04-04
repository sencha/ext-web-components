import Ext_ux_GMapPanel from './Ext/ux/GMapPanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGmappanel extends Ext_ux_GMapPanel {
  constructor() {
    super ([], []);
    this.xtype = 'gmappanel';
  }
}
try {
  if (window.customElements.get('ext-gmappanel') == undefined) {
    window.customElements.define('ext-gmappanel', ElementParser.withParsedCallback(EWCGmappanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-gmappanel') == undefined) {
    window.customElements.define('ext-gmappanel', EWCGmappanel);
  }
}
