import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCFormpanel extends Ext_form_FormPanel {
  constructor() {
    super ([], []);
    this.xtype = 'formpanel';
  }
}
try {
  window.customElements.define('ext-formpanel', ElementParser.withParsedCallback(EWCFormpanel));
}
catch(e) {
  window.customElements.define('ext-formpanel', EWCFormpanel);
}
