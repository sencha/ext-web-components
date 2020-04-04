import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRevealtrigger extends Ext_field_trigger_Reveal {
  constructor() {
    super ([], []);
    this.xtype = 'revealtrigger';
  }
}
try {
  if (window.customElements.get('ext-revealtrigger') == undefined) {
    window.customElements.define('ext-revealtrigger', ElementParser.withParsedCallback(EWCRevealtrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-revealtrigger') == undefined) {
    window.customElements.define('ext-revealtrigger', EWCRevealtrigger);
  }
}
