import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickercolorpreview';
  }
}
try {
  if (window.customElements.get('ext-colorpickercolorpreview') == undefined) {
    window.customElements.define('ext-colorpickercolorpreview', ElementParser.withParsedCallback(EWCColorpickercolorpreview));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickercolorpreview') == undefined) {
    window.customElements.define('ext-colorpickercolorpreview', EWCColorpickercolorpreview);
  }
}
