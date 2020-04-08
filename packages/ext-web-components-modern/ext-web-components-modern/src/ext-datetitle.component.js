import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatetitle extends Ext_panel_DateTitle {
  constructor() {
    super ([], []);
    this.xtype = 'datetitle';
  }
}
try {
  if (window.customElements.get('ext-datetitle') == undefined) {
    window.customElements.define('ext-datetitle', ElementParser.withParsedCallback(EWCDatetitle));
  }
}
catch(e) {
  if (window.customElements.get('ext-datetitle') == undefined) {
    window.customElements.define('ext-datetitle', EWCDatetitle);
  }
}
