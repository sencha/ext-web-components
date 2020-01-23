import Ext_QuickTip from './Ext/QuickTip.js';
import ElementParser from './ElementParser.js';

export default class EWCQuicktip extends Ext_QuickTip {
  constructor() {
    super ([], []);
    this.xtype = 'quicktip';
  }
}
try {
  window.customElements.define('ext-quicktip', ElementParser.withParsedCallback(EWCQuicktip));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-quicktip', EWCQuicktip);
}
