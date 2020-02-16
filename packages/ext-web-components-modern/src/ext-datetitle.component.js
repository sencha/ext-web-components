import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatetitle extends Ext_panel_DateTitle {
  constructor() {
    super ([], []);
    this.xtype = 'datetitle';
  }
}
try {
  window.customElements.define('ext-datetitle', ElementParser.withParsedCallback(EWCDatetitle));
}
catch(e) {
  window.customElements.define('ext-datetitle', EWCDatetitle);
}
