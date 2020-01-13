import Ext_slider_MultiSlider from './Ext/slider/MultiSlider.js';
import ElementParser from './ElementParser.js';

export default class EWCMultislider extends Ext_slider_MultiSlider {
  constructor() {
    super ([], []);
    this.xtype = 'multislider';
  }
}
window.customElements.define('ext-multislider', ElementParser.withParsedCallback(EWCMultislider));
