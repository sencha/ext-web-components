import Ext_panel_Date from './Ext/panel/Date.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatepanel extends Ext_panel_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datepanel';
  }
}
try {
  if (window.customElements.get('ext-datepanel') == undefined) {
    window.customElements.define('ext-datepanel', ElementParser.withParsedCallback(EWCDatepanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-datepanel') == undefined) {
    window.customElements.define('ext-datepanel', EWCDatepanel);
  }
}
