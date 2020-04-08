import Ext_toolbar_Separator from './Ext/toolbar/Separator.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTbseparator extends Ext_toolbar_Separator {
  constructor() {
    super ([], []);
    this.xtype = 'tbseparator';
  }
}
try {
  if (window.customElements.get('ext-tbseparator') == undefined) {
    window.customElements.define('ext-tbseparator', ElementParser.withParsedCallback(EWCTbseparator));
  }
}
catch(e) {
  if (window.customElements.get('ext-tbseparator') == undefined) {
    window.customElements.define('ext-tbseparator', EWCTbseparator);
  }
}
