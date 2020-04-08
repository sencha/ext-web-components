import Ext_slider_Tip from './Ext/slider/Tip.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSlidertip extends Ext_slider_Tip {
  constructor() {
    super ([], []);
    this.xtype = 'slidertip';
  }
}
try {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', ElementParser.withParsedCallback(EWCSlidertip));
  }
}
catch(e) {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', EWCSlidertip);
  }
}
