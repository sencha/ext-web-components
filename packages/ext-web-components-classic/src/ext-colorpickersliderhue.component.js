import Ext_ux_colorpick_SliderHue from './Ext/ux/colorpick/SliderHue.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickersliderhue extends Ext_ux_colorpick_SliderHue {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickersliderhue';
  }
}
try {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', ElementParser.withParsedCallback(EWCColorpickersliderhue));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', EWCColorpickersliderhue);
  }
}
