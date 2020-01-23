import Ext_Spacer from './Ext/Spacer.js';
import ElementParser from './ElementParser.js';

export default class EWCSpacer extends Ext_Spacer {
  constructor() {
    super ([], []);
    this.xtype = 'spacer';
  }
}
try {
  window.customElements.define('ext-spacer', ElementParser.withParsedCallback(EWCSpacer));
}
catch(e) {
  window.customElements.define('ext-spacer', EWCSpacer);
}
