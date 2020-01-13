import Ext_ux_colorpick_Slider from './Ext/ux/colorpick/Slider.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickerslider extends Ext_ux_colorpick_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslider';
  }
}
window.customElements.define('ext-colorpickerslider', ElementParser.withParsedCallback(EWCColorpickerslider));
