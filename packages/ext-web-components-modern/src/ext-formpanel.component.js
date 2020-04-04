import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFormpanel extends Ext_form_FormPanel {
  constructor() {
    super ([], []);
    this.xtype = 'formpanel';
  }
}
try {
  if (window.customElements.get('ext-formpanel') == undefined) {
    window.customElements.define('ext-formpanel', ElementParser.withParsedCallback(EWCFormpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-formpanel') == undefined) {
    window.customElements.define('ext-formpanel', EWCFormpanel);
  }
}
