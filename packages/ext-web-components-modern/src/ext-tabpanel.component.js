import Ext_TabPanel from './Ext/TabPanel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTabpanel extends Ext_TabPanel {
  constructor() {
    super ([], []);
    this.xtype = 'tabpanel';
  }
}
try {
  window.customElements.define('ext-tabpanel', ElementParser.withParsedCallback(EWCTabpanel));
}
catch(e) {
  window.customElements.define('ext-tabpanel', EWCTabpanel);
}
