import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCarousel extends Ext_Carousel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'carousel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-carousel', ExtCarousel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarousel))
//export default reactify(ExtCarousel);