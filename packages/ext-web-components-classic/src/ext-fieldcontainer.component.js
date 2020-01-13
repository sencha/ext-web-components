import Ext_form_FieldContainer from './Ext/form/FieldContainer.js';
import ElementParser from './ElementParser.js';

export default class EWCFieldcontainer extends Ext_form_FieldContainer {
  constructor() {
    super ([], []);
    this.xtype = 'fieldcontainer';
  }
}
window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
