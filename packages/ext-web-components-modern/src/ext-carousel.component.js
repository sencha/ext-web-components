import Ext_Carousel from './Ext/Carousel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCarousel extends Ext_Carousel {
  constructor() {
    super ([], []);
    this.xtype = 'carousel';
  }
}
try {
  window.customElements.define('ext-carousel', ElementParser.withParsedCallback(EWCCarousel));
}
catch(e) {
  window.customElements.define('ext-carousel', EWCCarousel);
}
