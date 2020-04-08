import Ext_ux_colorpick_SliderSaturation from './Ext/ux/colorpick/SliderSaturation.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickerslidersaturation extends Ext_ux_colorpick_SliderSaturation {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslidersaturation';
  }
}
try {
  if (window.customElements.get('ext-colorpickerslidersaturation') == undefined) {
    window.customElements.define('ext-colorpickerslidersaturation', ElementParser.withParsedCallback(EWCColorpickerslidersaturation));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickerslidersaturation') == undefined) {
    window.customElements.define('ext-colorpickerslidersaturation', EWCColorpickerslidersaturation);
  }
}
