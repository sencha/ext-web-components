import Ext_ux_colorpick_ColorMap from './Ext/ux/colorpick/ColorMap.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickercolormap extends Ext_ux_colorpick_ColorMap {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickercolormap';
  }
}
try {
  if (window.customElements.get('ext-colorpickercolormap') == undefined) {
    window.customElements.define('ext-colorpickercolormap', ElementParser.withParsedCallback(EWCColorpickercolormap));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickercolormap') == undefined) {
    window.customElements.define('ext-colorpickercolormap', EWCColorpickercolormap);
  }
}
