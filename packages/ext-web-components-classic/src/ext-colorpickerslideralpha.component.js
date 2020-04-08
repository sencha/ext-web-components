import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickerslideralpha extends Ext_ux_colorpick_SliderAlpha {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslideralpha';
  }
}
try {
  if (window.customElements.get('ext-colorpickerslideralpha') == undefined) {
    window.customElements.define('ext-colorpickerslideralpha', ElementParser.withParsedCallback(EWCColorpickerslideralpha));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickerslideralpha') == undefined) {
    window.customElements.define('ext-colorpickerslideralpha', EWCColorpickerslideralpha);
  }
}
