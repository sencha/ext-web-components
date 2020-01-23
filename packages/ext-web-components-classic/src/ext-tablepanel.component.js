import Ext_panel_Table from './Ext/panel/Table.js';
import ElementParser from './ElementParser.js';

export default class EWCTablepanel extends Ext_panel_Table {
  constructor() {
    super ([], []);
    this.xtype = 'tablepanel';
  }
}
try {
  window.customElements.define('ext-tablepanel', ElementParser.withParsedCallback(EWCTablepanel));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-tablepanel', EWCTablepanel);
}
