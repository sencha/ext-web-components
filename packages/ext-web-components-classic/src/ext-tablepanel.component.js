import Ext_panel_Table from './Ext/panel/Table.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTablepanel extends Ext_panel_Table {
  constructor() {
    super ([], []);
    this.xtype = 'tablepanel';
  }
}
try {
  if (window.customElements.get('ext-tablepanel') == undefined) {
    window.customElements.define('ext-tablepanel', ElementParser.withParsedCallback(EWCTablepanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-tablepanel') == undefined) {
    window.customElements.define('ext-tablepanel', EWCTablepanel);
  }
}
