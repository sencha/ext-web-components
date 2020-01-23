import Ext_ColorPalette from './Ext/ColorPalette.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpicker extends Ext_ColorPalette {
  constructor() {
    super ([], []);
    this.xtype = 'colorpicker';
  }
}
try {
  window.customElements.define('ext-colorpicker', ElementParser.withParsedCallback(EWCColorpicker));
}
catch(e) {
  window.customElements.define('ext-colorpicker', EWCColorpicker);
}
