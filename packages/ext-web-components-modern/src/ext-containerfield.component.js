import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCContainerfield extends Ext_field_Container {
  constructor() {
    super ([], []);
    this.xtype = 'containerfield';
  }
}
window.customElements.define('ext-containerfield', ElementParser.withParsedCallback(EWCContainerfield));
