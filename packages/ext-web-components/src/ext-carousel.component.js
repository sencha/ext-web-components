import Ext_Carousel from './Ext/Carousel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCarouselComponent extends Ext_Carousel {
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
//        window.customElements.define('ext-carousel', ExtCarouselComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarouselComponent))
