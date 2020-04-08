import Ext_ux_IFrame from './Ext/ux/IFrame.js';
import ElementParser from './common/ElementParser.js';

export default class EWCUxiframe extends Ext_ux_IFrame {
  constructor() {
    super ([], []);
    this.xtype = 'uxiframe';
  }
}
try {
  if (window.customElements.get('ext-uxiframe') == undefined) {
    window.customElements.define('ext-uxiframe', ElementParser.withParsedCallback(EWCUxiframe));
  }
}
catch(e) {
  if (window.customElements.get('ext-uxiframe') == undefined) {
    window.customElements.define('ext-uxiframe', EWCUxiframe);
  }
}
