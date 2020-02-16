import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickercolorpreview';
  }
}
try {
  window.customElements.define('ext-colorpickercolorpreview', ElementParser.withParsedCallback(EWCColorpickercolorpreview));
}
catch(e) {
  window.customElements.define('ext-colorpickercolorpreview', EWCColorpickercolorpreview);
}
