import Ext_field_Time from './Ext/field/Time.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTimefield extends Ext_field_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timefield';
  }
}
try {
  if (window.customElements.get('ext-timefield') == undefined) {
    window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-timefield') == undefined) {
    window.customElements.define('ext-timefield', EWCTimefield);
  }
}
