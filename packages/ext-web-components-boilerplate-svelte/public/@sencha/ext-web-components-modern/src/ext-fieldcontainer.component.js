import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCFieldcontainer extends Ext_field_Container {
  constructor() {
    super ([], []);
    this.xtype = 'fieldcontainer';
  }
}
try {
  window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
}
catch(e) {
  window.customElements.define('ext-fieldcontainer', EWCFieldcontainer);
}
