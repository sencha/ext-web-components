import Ext_form_Time from './Ext/form/Time.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTimefield extends Ext_form_Time {
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
