import Ext_Mask from './Ext/Mask.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMask extends Ext_Mask {
  constructor() {
    super ([], []);
    this.xtype = 'mask';
  }
}
try {
  if (window.customElements.get('ext-mask') == undefined) {
    window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
  }
}
catch(e) {
  if (window.customElements.get('ext-mask') == undefined) {
    window.customElements.define('ext-mask', EWCMask);
  }
}
