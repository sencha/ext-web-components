import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import ElementParser from './ElementParser.js';

export default class EWCDatetitle extends Ext_panel_DateTitle {
  constructor() {
    super ([], []);
    this.xtype = 'datetitle';
  }
}
window.customElements.define('ext-datetitle', ElementParser.withParsedCallback(EWCDatetitle));
