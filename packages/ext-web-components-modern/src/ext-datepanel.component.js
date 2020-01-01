import Ext_panel_Date from './Ext/panel/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatepanel extends Ext_panel_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datepanel';
  }
}
window.customElements.define('ext-datepanel', ElementParser.withParsedCallback(EWCDatepanel));
