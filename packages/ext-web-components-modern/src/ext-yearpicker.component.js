import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCYearpicker extends Ext_panel_YearPicker {
  constructor() {
    super ([], []);
    this.xtype = 'yearpicker';
  }
}
try {
  window.customElements.define('ext-yearpicker', ElementParser.withParsedCallback(EWCYearpicker));
}
catch(e) {
  window.customElements.define('ext-yearpicker', EWCYearpicker);
}
