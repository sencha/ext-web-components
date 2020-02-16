import Ext_field_Time from './Ext/field/Time.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTimefield extends Ext_field_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timefield';
  }
}
try {
  window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
}
catch(e) {
  window.customElements.define('ext-timefield', EWCTimefield);
}
