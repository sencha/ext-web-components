import Ext_Indicator from './Ext/Indicator.js';
import ElementParser from './ElementParser.js';

export default class EWCIndicator extends Ext_Indicator {
  constructor() {
    super ([], []);
    this.xtype = 'indicator';
  }
}
window.customElements.define('ext-indicator', ElementParser.withParsedCallback(EWCIndicator));
