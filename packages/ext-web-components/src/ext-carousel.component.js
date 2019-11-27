//import Ext_Carousel from '@sencha/ext-runtime-base/dist/./Ext/Carousel.js';
import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCarousel extends Ext_Carousel {
    constructor() {
        super ([], []);
        this.xtype = 'carousel';
    }

}
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(EWCCarousel));

