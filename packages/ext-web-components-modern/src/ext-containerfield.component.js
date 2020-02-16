import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCContainerfield extends Ext_field_Container {
  constructor() {
    super ([], []);
    this.xtype = 'containerfield';
  }
}
try {
  window.customElements.define('ext-containerfield', ElementParser.withParsedCallback(EWCContainerfield));
}
catch(e) {
  window.customElements.define('ext-containerfield', EWCContainerfield);
}
