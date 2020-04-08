import Ext_Spacer from './Ext/Spacer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSpacer extends Ext_Spacer {
  constructor() {
    super ([], []);
    this.xtype = 'spacer';
  }
}
try {
  if (window.customElements.get('ext-spacer') == undefined) {
    window.customElements.define('ext-spacer', ElementParser.withParsedCallback(EWCSpacer));
  }
}
catch(e) {
  if (window.customElements.get('ext-spacer') == undefined) {
    window.customElements.define('ext-spacer', EWCSpacer);
  }
}
