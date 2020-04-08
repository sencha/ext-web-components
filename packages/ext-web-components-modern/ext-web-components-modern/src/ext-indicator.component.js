import Ext_Indicator from './Ext/Indicator.js';
import ElementParser from './common/ElementParser.js';

export default class EWCIndicator extends Ext_Indicator {
  constructor() {
    super ([], []);
    this.xtype = 'indicator';
  }
}
try {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', ElementParser.withParsedCallback(EWCIndicator));
  }
}
catch(e) {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', EWCIndicator);
  }
}
