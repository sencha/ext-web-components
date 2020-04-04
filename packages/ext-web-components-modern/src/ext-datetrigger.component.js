import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatetrigger extends Ext_field_trigger_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datetrigger';
  }
}
try {
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', EWCDatetrigger);
  }
}
