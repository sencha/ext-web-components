import Ext_panel_Date from './Ext/panel/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatepanel extends Ext_panel_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datepanel';
  }
}
try {
  window.customElements.define('ext-datepanel', ElementParser.withParsedCallback(EWCDatepanel));
}
catch(e) {
  window.customElements.define('ext-datepanel', EWCDatepanel);
}
