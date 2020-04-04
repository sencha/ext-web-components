import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupcontainer extends Ext_field_FieldGroupContainer {
  constructor() {
    super ([], []);
    this.xtype = 'groupcontainer';
  }
}
try {
  if (window.customElements.get('ext-groupcontainer') == undefined) {
    window.customElements.define('ext-groupcontainer', ElementParser.withParsedCallback(EWCGroupcontainer));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupcontainer') == undefined) {
    window.customElements.define('ext-groupcontainer', EWCGroupcontainer);
  }
}
