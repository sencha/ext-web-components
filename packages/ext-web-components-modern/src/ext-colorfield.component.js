import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCColorfield extends Ext_ux_colorpick_Field {
  constructor() {
    super ([], []);
    this.xtype = 'colorfield';
  }
}
try {
  window.customElements.define('ext-colorfield', ElementParser.withParsedCallback(EWCColorfield));
}
catch(e) {
  window.customElements.define('ext-colorfield', EWCColorfield);
}
