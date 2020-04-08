import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import ElementParser from './common/ElementParser.js';

export default class EWCExpandtrigger extends Ext_field_trigger_Expand {
  constructor() {
    super ([], []);
    this.xtype = 'expandtrigger';
  }
}
try {
  if (window.customElements.get('ext-expandtrigger') == undefined) {
    window.customElements.define('ext-expandtrigger', ElementParser.withParsedCallback(EWCExpandtrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-expandtrigger') == undefined) {
    window.customElements.define('ext-expandtrigger', EWCExpandtrigger);
  }
}
