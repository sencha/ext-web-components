//import Ext_form_Slider from '@sencha/ext-runtime-base/dist/./Ext/form/Slider.js';
import Ext_form_Slider from './Ext/form/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSliderfield extends Ext_form_Slider {
    constructor() {
        super ([], []);
        this.xtype = 'sliderfield';
    }

}
window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(EWCSliderfield));

