import Ext_toolbar_Separator from './Ext/toolbar/Separator.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTbseparator extends Ext_toolbar_Separator {
  constructor() {
    super ([], []);
    this.xtype = 'tbseparator';
  }
}
try {
  window.customElements.define('ext-tbseparator', ElementParser.withParsedCallback(EWCTbseparator));
}
catch(e) {
  window.customElements.define('ext-tbseparator', EWCTbseparator);
}
