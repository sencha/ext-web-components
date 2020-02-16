import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSlider extends Ext_slider_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'slider';
  }
}
try {
  window.customElements.define('ext-slider', ElementParser.withParsedCallback(EWCSlider));
}
catch(e) {
  window.customElements.define('ext-slider', EWCSlider);
}
