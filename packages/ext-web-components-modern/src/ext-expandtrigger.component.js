import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import ElementParser from './ElementParser.js';

export default class EWCExpandtrigger extends Ext_field_trigger_Expand {
  constructor() {
    super ([], []);
    this.xtype = 'expandtrigger';
  }
}
window.customElements.define('ext-expandtrigger', ElementParser.withParsedCallback(EWCExpandtrigger));
