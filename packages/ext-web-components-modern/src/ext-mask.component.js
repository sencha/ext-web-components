import Ext_Mask from './Ext/Mask.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMask extends Ext_Mask {
  constructor() {
    super ([], []);
    this.xtype = 'mask';
  }
}
try {
  window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
}
catch(e) {
  window.customElements.define('ext-mask', EWCMask);
}
