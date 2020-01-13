import Ext_Tip from './Ext/Tip.js';
import ElementParser from './ElementParser.js';

export default class EWCTip extends Ext_Tip {
  constructor() {
    super ([], []);
    this.xtype = 'tip';
  }
}
window.customElements.define('ext-tip', ElementParser.withParsedCallback(EWCTip));
