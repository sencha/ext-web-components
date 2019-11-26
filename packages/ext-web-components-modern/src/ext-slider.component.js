//import Ext_slider_Slider from '@sencha/ext-runtime-base/dist/./Ext/slider/Slider.js';
import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSlider extends Ext_slider_Slider {
    constructor() {
        super ([], []);
        this.xtype = 'slider';
    }

}
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(EWCSlider));

