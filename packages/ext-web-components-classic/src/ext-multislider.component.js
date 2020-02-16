import Ext_slider_MultiSlider from './Ext/slider/MultiSlider.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMultislider extends Ext_slider_MultiSlider {
  constructor() {
    super ([], []);
    this.xtype = 'multislider';
  }
}
try {
  window.customElements.define('ext-multislider', ElementParser.withParsedCallback(EWCMultislider));
}
catch(e) {
  window.customElements.define('ext-multislider', EWCMultislider);
}
