import Ext_form_Slider from './Ext/form/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSliderfield extends Ext_form_Slider {
    constructor() {
        super ([],[])
        this.xtype = 'sliderfield';
    }
}
window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfield))
