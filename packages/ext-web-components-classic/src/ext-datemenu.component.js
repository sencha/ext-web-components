import Ext_menu_DatePicker from './Ext/menu/DatePicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatemenu extends Ext_menu_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datemenu';
  }
}
try {
  if (window.customElements.get('ext-datemenu') == undefined) {
    window.customElements.define('ext-datemenu', ElementParser.withParsedCallback(EWCDatemenu));
  }
}
catch(e) {
  if (window.customElements.get('ext-datemenu') == undefined) {
    window.customElements.define('ext-datemenu', EWCDatemenu);
  }
}
