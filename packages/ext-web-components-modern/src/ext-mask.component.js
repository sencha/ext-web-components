import Ext_Mask from './Ext/Mask.js';
import ElementParser from './ElementParser.js';

export default class EWCMask extends Ext_Mask {
  constructor() {
    super ([], []);
    this.xtype = 'mask';
  }
}
window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
