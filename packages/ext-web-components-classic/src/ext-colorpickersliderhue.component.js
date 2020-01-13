import Ext_ux_colorpick_SliderHue from './Ext/ux/colorpick/SliderHue.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickersliderhue extends Ext_ux_colorpick_SliderHue {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickersliderhue';
  }
}
window.customElements.define('ext-colorpickersliderhue', ElementParser.withParsedCallback(EWCColorpickersliderhue));
