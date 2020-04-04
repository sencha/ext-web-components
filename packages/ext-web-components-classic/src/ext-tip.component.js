import Ext_Tip from './Ext/Tip.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTip extends Ext_Tip {
  constructor() {
    super ([], []);
    this.xtype = 'tip';
  }
}
try {
  if (window.customElements.get('ext-tip') == undefined) {
    window.customElements.define('ext-tip', ElementParser.withParsedCallback(EWCTip));
  }
}
catch(e) {
  if (window.customElements.get('ext-tip') == undefined) {
    window.customElements.define('ext-tip', EWCTip);
  }
}
