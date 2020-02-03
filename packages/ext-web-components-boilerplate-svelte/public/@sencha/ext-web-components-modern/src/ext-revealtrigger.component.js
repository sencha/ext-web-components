import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import ElementParser from './ElementParser.js';

export default class EWCRevealtrigger extends Ext_field_trigger_Reveal {
  constructor() {
    super ([], []);
    this.xtype = 'revealtrigger';
  }
}
try {
  window.customElements.define('ext-revealtrigger', ElementParser.withParsedCallback(EWCRevealtrigger));
}
catch(e) {
  window.customElements.define('ext-revealtrigger', EWCRevealtrigger);
}
