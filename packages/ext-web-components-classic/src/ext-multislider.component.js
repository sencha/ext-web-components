import Ext_slider_MultiSlider from './Ext/slider/MultiSlider.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMultislider extends Ext_slider_MultiSlider {
  constructor() {
    super ([], []);
    this.xtype = 'multislider';
  }
}
try {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', ElementParser.withParsedCallback(EWCMultislider));
  }
}
catch(e) {
  if (window.customElements.get('ext-multislider') == undefined) {
    window.customElements.define('ext-multislider', EWCMultislider);
  }
}
