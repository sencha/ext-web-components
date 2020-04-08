import Ext_TreePanel from './Ext/TreePanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreepanel extends Ext_TreePanel {
  constructor() {
    super ([], []);
    this.xtype = 'treepanel';
  }
}
try {
  if (window.customElements.get('ext-treepanel') == undefined) {
    window.customElements.define('ext-treepanel', ElementParser.withParsedCallback(EWCTreepanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-treepanel') == undefined) {
    window.customElements.define('ext-treepanel', EWCTreepanel);
  }
}
