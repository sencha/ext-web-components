import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFieldpanel extends Ext_field_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'fieldpanel';
  }
}
try {
  if (window.customElements.get('ext-fieldpanel') == undefined) {
    window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-fieldpanel') == undefined) {
    window.customElements.define('ext-fieldpanel', EWCFieldpanel);
  }
}
