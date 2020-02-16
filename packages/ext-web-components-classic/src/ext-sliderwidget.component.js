import Ext_slider_Widget from './Ext/slider/Widget.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSliderwidget extends Ext_slider_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'sliderwidget';
  }
}
try {
  window.customElements.define('ext-sliderwidget', ElementParser.withParsedCallback(EWCSliderwidget));
}
catch(e) {
  window.customElements.define('ext-sliderwidget', EWCSliderwidget);
}
