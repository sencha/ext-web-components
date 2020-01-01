import Ext_Carousel from './Ext/Carousel.js';
import ElementParser from './ElementParser.js';

export default class EWCCarousel extends Ext_Carousel {
  constructor() {
    super ([], []);
    this.xtype = 'carousel';
  }
}
window.customElements.define('ext-carousel', ElementParser.withParsedCallback(EWCCarousel));
