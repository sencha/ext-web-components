import Ext_slider_Tip from './Ext/slider/Tip.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSlidertip extends Ext_slider_Tip {
  constructor() {
    super ([], []);
    this.xtype = 'slidertip';
  }
}
try {
  window.customElements.define('ext-slidertip', ElementParser.withParsedCallback(EWCSlidertip));
}
catch(e) {
  window.customElements.define('ext-slidertip', EWCSlidertip);
}
