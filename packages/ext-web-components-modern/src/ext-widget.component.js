import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './ElementParser.js';

export default class EWCWidget extends Ext_Gadget {
  constructor() {
    super ([], []);
    this.xtype = 'widget';
  }
}
window.customElements.define('ext-widget', ElementParser.withParsedCallback(EWCWidget));
