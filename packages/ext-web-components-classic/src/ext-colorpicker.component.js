import Ext_ColorPalette from './Ext/ColorPalette.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpicker extends Ext_ColorPalette {
  constructor() {
    super ([], []);
    this.xtype = 'colorpicker';
  }
}
try {
  if (window.customElements.get('ext-colorpicker') == undefined) {
    window.customElements.define('ext-colorpicker', ElementParser.withParsedCallback(EWCColorpicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpicker') == undefined) {
    window.customElements.define('ext-colorpicker', EWCColorpicker);
  }
}
