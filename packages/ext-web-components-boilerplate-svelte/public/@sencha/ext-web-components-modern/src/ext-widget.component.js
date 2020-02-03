import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './ElementParser.js';

export default class EWCWidget extends Ext_Gadget {
  constructor() {
    super ([], []);
    this.xtype = 'widget';
  }
}
try {
  window.customElements.define('ext-widget', ElementParser.withParsedCallback(EWCWidget));
}
catch(e) {
  window.customElements.define('ext-widget', EWCWidget);
}
