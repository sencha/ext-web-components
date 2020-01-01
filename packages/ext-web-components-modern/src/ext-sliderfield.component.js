import Ext_form_Slider from './Ext/form/Slider.js';
import ElementParser from './ElementParser.js';

export default class EWCSliderfield extends Ext_form_Slider {
  constructor() {
    super ([], []);
    this.xtype = 'sliderfield';
  }
}
window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
