import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCFieldpanel extends Ext_field_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'fieldpanel';
  }
}
window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
