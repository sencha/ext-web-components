import Ext_ux_IFrame from './Ext/ux/IFrame.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCUxiframe extends Ext_ux_IFrame {
  constructor() {
    super ([], []);
    this.xtype = 'uxiframe';
  }
}
try {
  window.customElements.define('ext-uxiframe', ElementParser.withParsedCallback(EWCUxiframe));
}
catch(e) {
  window.customElements.define('ext-uxiframe', EWCUxiframe);
}
