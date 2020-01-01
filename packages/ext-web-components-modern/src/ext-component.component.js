import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './ElementParser.js';

export default class EWCComponent extends Ext_Gadget {
  constructor() {
    super ([], []);
    this.xtype = 'component';
  }
}
window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
