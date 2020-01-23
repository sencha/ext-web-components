import Ext_ux_GMapPanel from './Ext/ux/GMapPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCGmappanel extends Ext_ux_GMapPanel {
  constructor() {
    super ([], []);
    this.xtype = 'gmappanel';
  }
}
try {
  window.customElements.define('ext-gmappanel', ElementParser.withParsedCallback(EWCGmappanel));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-gmappanel', EWCGmappanel);
}
