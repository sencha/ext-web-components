import Ext_Carousel_Component from './Ext/Carousel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCarouselComponent extends Ext_Carousel_Component {
    constructor() {
        super ()
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
