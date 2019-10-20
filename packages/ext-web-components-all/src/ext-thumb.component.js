import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtThumb extends Ext_slider_Thumb {
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
//        window.customElements.define('ext-thumb', ExtThumb);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumb))
//export default reactify(ExtThumb);