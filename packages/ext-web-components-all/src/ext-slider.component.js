import Ext_slider_Slider from './Ext/slider/Slider.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSliderComponent extends Ext_slider_Slider {
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
//        window.customElements.define('ext-slider', ExtSliderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSliderComponent))
