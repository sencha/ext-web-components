import Ext_slider_Thumb from './Ext/slider/Thumb.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtThumbComponent extends Ext_slider_Thumb {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'thumb'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-thumb', ExtThumbComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumbComponent))
