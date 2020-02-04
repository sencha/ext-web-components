import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCFieldpanel extends Ext_field_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'fieldpanel';
  }
}
try {
  window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
}
catch(e) {
  window.customElements.define('ext-fieldpanel', EWCFieldpanel);
}
