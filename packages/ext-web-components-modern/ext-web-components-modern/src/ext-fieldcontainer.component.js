import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFieldcontainer extends Ext_field_Container {
  constructor() {
    super ([], []);
    this.xtype = 'fieldcontainer';
  }
}
try {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
  }
}
catch(e) {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', EWCFieldcontainer);
  }
}
