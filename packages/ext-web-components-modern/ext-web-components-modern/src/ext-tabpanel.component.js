import Ext_TabPanel from './Ext/TabPanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTabpanel extends Ext_TabPanel {
  constructor() {
    super ([], []);
    this.xtype = 'tabpanel';
  }
}
try {
  if (window.customElements.get('ext-tabpanel') == undefined) {
    window.customElements.define('ext-tabpanel', ElementParser.withParsedCallback(EWCTabpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-tabpanel') == undefined) {
    window.customElements.define('ext-tabpanel', EWCTabpanel);
  }
}
