import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSlider extends Ext_slider_Slider {
    constructor() {
        super ([],[])
        this.xtype = 'slider';
    }
}
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSlider))
