import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWidget extends Ext_Gadget {
  constructor() {
    super ([], []);
    this.xtype = 'widget';
  }
}
try {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', ElementParser.withParsedCallback(EWCWidget));
  }
}
catch(e) {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', EWCWidget);
  }
}
