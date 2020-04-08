import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSlider extends Ext_slider_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'slider';
  }
}
try {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', ElementParser.withParsedCallback(EWCSlider));
  }
}
catch(e) {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', EWCSlider);
  }
}
