import Ext_form_Slider from './Ext/form/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSliderfield extends Ext_form_Slider {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sliderfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sliderfield', ExtSliderfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfield))
//export default reactify(ExtSliderfield);