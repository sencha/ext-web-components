import Ext_slider_Slider_Component from './Ext/slider/Slider'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSliderComponent extends Ext_slider_Slider_Component {
    constructor() {
        super (
            {},
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
