import Ext_picker_Time from './Ext/picker/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimepicker extends Ext_picker_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timepicker';
  }
}
window.customElements.define('ext-timepicker', ElementParser.withParsedCallback(EWCTimepicker));
