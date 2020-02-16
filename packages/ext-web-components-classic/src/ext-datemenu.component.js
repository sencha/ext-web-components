import Ext_menu_DatePicker from './Ext/menu/DatePicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatemenu extends Ext_menu_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datemenu';
  }
}
try {
  window.customElements.define('ext-datemenu', ElementParser.withParsedCallback(EWCDatemenu));
}
catch(e) {
  window.customElements.define('ext-datemenu', EWCDatemenu);
}
