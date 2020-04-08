import Ext_Carousel from './Ext/Carousel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCarousel extends Ext_Carousel {
  constructor() {
    super ([], []);
    this.xtype = 'carousel';
  }
}
try {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', ElementParser.withParsedCallback(EWCCarousel));
  }
}
catch(e) {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', EWCCarousel);
  }
}
