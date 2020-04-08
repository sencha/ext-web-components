import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

export default class EWCContainerfield extends Ext_field_Container {
  constructor() {
    super ([], []);
    this.xtype = 'containerfield';
  }
}
try {
  if (window.customElements.get('ext-containerfield') == undefined) {
    window.customElements.define('ext-containerfield', ElementParser.withParsedCallback(EWCContainerfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-containerfield') == undefined) {
    window.customElements.define('ext-containerfield', EWCContainerfield);
  }
}
