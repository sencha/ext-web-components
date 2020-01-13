import Ext_ux_colorpick_ColorMap from './Ext/ux/colorpick/ColorMap.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickercolormap extends Ext_ux_colorpick_ColorMap {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickercolormap';
  }
}
window.customElements.define('ext-colorpickercolormap', ElementParser.withParsedCallback(EWCColorpickercolormap));
