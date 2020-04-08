import Ext_form_Slider from './Ext/form/Slider.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSliderfield extends Ext_form_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'sliderfield';
  }
}
try {
  if (window.customElements.get('ext-sliderfield') == undefined) {
    window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-sliderfield') == undefined) {
    window.customElements.define('ext-sliderfield', EWCSliderfield);
  }
}
