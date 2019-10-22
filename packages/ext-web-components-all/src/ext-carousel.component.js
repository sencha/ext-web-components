import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCarousel extends Ext_Carousel {
    constructor() {
        super ([],[])
        this.xtype = 'carousel';
    }
}
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarousel))
