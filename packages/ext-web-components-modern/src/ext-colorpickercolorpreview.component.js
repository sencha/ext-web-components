import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickercolorpreview';
  }
}
window.customElements.define('ext-colorpickercolorpreview', ElementParser.withParsedCallback(EWCColorpickercolorpreview));
