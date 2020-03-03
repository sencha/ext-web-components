import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Widget from './Ext/slider/Widget.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSliderwidget = /*#__PURE__*/function (_Ext_slider_Widget) {
  _inheritsLoose(EWCSliderwidget, _Ext_slider_Widget);

  function EWCSliderwidget() {
    var _this;

    _this = _Ext_slider_Widget.call(this, [], []) || this;
    _this.xtype = 'sliderwidget';
    return _this;
  }

  return EWCSliderwidget;
}(Ext_slider_Widget);

export { EWCSliderwidget as default };

try {
  window.customElements.define('ext-sliderwidget', ElementParser.withParsedCallback(EWCSliderwidget));
} catch (e) {
  window.customElements.define('ext-sliderwidget', EWCSliderwidget);
}