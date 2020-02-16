import Ext_Indicator from './Ext/Indicator.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCIndicator extends Ext_Indicator {
  constructor() {
    super ([], []);
    this.xtype = 'indicator';
  }
}
try {
  window.customElements.define('ext-indicator', ElementParser.withParsedCallback(EWCIndicator));
}
catch(e) {
  window.customElements.define('ext-indicator', EWCIndicator);
}
