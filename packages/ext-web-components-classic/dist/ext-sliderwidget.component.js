import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_Widget from './Ext/slider/Widget.js';
import ElementParser from './common/ElementParser.js';

var EWCSliderwidget = /*#__PURE__*/function (_Ext_slider_Widget) {
  _inheritsLoose(EWCSliderwidget, _Ext_slider_Widget);

  var _super = _createSuper(EWCSliderwidget);

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
  if (window.customElements.get('ext-sliderwidget') == undefined) {
    window.customElements.define('ext-sliderwidget', ElementParser.withParsedCallback(EWCSliderwidget));
  }
} catch (e) {
  if (window.customElements.get('ext-sliderwidget') == undefined) {
    window.customElements.define('ext-sliderwidget', EWCSliderwidget);
  }
}