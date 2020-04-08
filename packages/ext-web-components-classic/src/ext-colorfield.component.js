import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorfield extends Ext_ux_colorpick_Field {
  constructor() {
    super ([], []);
    this.xtype = 'colorfield';
  }
}
try {
  if (window.customElements.get('ext-colorfield') == undefined) {
    window.customElements.define('ext-colorfield', ElementParser.withParsedCallback(EWCColorfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorfield') == undefined) {
    window.customElements.define('ext-colorfield', EWCColorfield);
  }
}
