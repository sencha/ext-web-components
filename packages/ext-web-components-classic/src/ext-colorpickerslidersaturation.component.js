import Ext_ux_colorpick_SliderSaturation from './Ext/ux/colorpick/SliderSaturation.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickerslidersaturation extends Ext_ux_colorpick_SliderSaturation {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslidersaturation';
  }
}
try {
  window.customElements.define('ext-colorpickerslidersaturation', ElementParser.withParsedCallback(EWCColorpickerslidersaturation));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-colorpickerslidersaturation', EWCColorpickerslidersaturation);
}
