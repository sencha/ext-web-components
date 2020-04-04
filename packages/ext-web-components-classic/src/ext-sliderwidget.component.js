import Ext_slider_Widget from './Ext/slider/Widget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSliderwidget extends Ext_slider_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'sliderwidget';
  }
}
try {
  if (window.customElements.get('ext-sliderwidget') == undefined) {
    window.customElements.define('ext-sliderwidget', ElementParser.withParsedCallback(EWCSliderwidget));
  }
}
catch(e) {
  if (window.customElements.get('ext-sliderwidget') == undefined) {
    window.customElements.define('ext-sliderwidget', EWCSliderwidget);
  }
}
