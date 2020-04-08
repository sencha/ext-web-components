import Ext_ux_colorpick_Slider from './Ext/ux/colorpick/Slider.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickerslider extends Ext_ux_colorpick_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslider';
  }
}
try {
  if (window.customElements.get('ext-colorpickerslider') == undefined) {
    window.customElements.define('ext-colorpickerslider', ElementParser.withParsedCallback(EWCColorpickerslider));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickerslider') == undefined) {
    window.customElements.define('ext-colorpickerslider', EWCColorpickerslider);
  }
}
