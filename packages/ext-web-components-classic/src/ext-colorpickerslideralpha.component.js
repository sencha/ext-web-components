import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickerslideralpha extends Ext_ux_colorpick_SliderAlpha {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslideralpha';
  }
}
try {
  window.customElements.define('ext-colorpickerslideralpha', ElementParser.withParsedCallback(EWCColorpickerslideralpha));
}
catch(e) {
  window.customElements.define('ext-colorpickerslideralpha', EWCColorpickerslideralpha);
}
