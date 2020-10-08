import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCYearpicker extends Ext_panel_YearPicker {
  constructor() {
    super ([], []);
    this.xtype = 'yearpicker';
  }
}
try {
  if (window.customElements.get('ext-yearpicker') == undefined) {
    window.customElements.define('ext-yearpicker', ElementParser.withParsedCallback(EWCYearpicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-yearpicker') == undefined) {
    window.customElements.define('ext-yearpicker', EWCYearpicker);
  }
}
