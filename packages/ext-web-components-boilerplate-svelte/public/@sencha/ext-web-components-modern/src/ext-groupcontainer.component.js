import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import ElementParser from './ElementParser.js';

export default class EWCGroupcontainer extends Ext_field_FieldGroupContainer {
  constructor() {
    super ([], []);
    this.xtype = 'groupcontainer';
  }
}
try {
  window.customElements.define('ext-groupcontainer', ElementParser.withParsedCallback(EWCGroupcontainer));
}
catch(e) {
  window.customElements.define('ext-groupcontainer', EWCGroupcontainer);
}
