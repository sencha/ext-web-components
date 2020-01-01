import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import ElementParser from './ElementParser.js';

export default class EWCYearpicker extends Ext_panel_YearPicker {
  constructor() {
    super ([], []);
    this.xtype = 'yearpicker';
  }
}
window.customElements.define('ext-yearpicker', ElementParser.withParsedCallback(EWCYearpicker));
