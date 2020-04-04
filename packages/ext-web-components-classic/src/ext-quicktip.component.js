import Ext_QuickTip from './Ext/QuickTip.js';
import ElementParser from './common/ElementParser.js';

export default class EWCQuicktip extends Ext_QuickTip {
  constructor() {
    super ([], []);
    this.xtype = 'quicktip';
  }
}
try {
  if (window.customElements.get('ext-quicktip') == undefined) {
    window.customElements.define('ext-quicktip', ElementParser.withParsedCallback(EWCQuicktip));
  }
}
catch(e) {
  if (window.customElements.get('ext-quicktip') == undefined) {
    window.customElements.define('ext-quicktip', EWCQuicktip);
  }
}
