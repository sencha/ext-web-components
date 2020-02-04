import Ext_TreePanel from './Ext/TreePanel.js';
import ElementParser from './ElementParser.js';

export default class EWCTreepanel extends Ext_TreePanel {
  constructor() {
    super ([], []);
    this.xtype = 'treepanel';
  }
}
try {
  window.customElements.define('ext-treepanel', ElementParser.withParsedCallback(EWCTreepanel));
}
catch(e) {
  window.customElements.define('ext-treepanel', EWCTreepanel);
}
