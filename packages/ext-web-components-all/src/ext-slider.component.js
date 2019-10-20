import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSlider extends Ext_slider_Slider {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'slider'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-slider', ExtSlider);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSlider))
//export default reactify(ExtSlider);