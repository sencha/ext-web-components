import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSliderfield extends Ext_slider_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'sliderfield';
  }
}
try {
  window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
}
catch(e) {
  window.customElements.define('ext-sliderfield', EWCSliderfield);
}
