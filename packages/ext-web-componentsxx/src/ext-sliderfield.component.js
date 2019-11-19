import Ext_form_Slider from './Ext/form/Slider'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSliderfieldComponent extends Ext_form_Slider {
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
//        window.customElements.define('ext-sliderfield', ExtSliderfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfieldComponent))
