import Ext_ux_colorpick_SliderValue from './Ext/ux/colorpick/SliderValue.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorpickerslidervalue extends Ext_ux_colorpick_SliderValue {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslidervalue';
  }
}
try {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', ElementParser.withParsedCallback(EWCColorpickerslidervalue));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', EWCColorpickerslidervalue);
  }
}
