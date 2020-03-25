import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Slider from './Ext/form/Slider.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSliderfield = /*#__PURE__*/function (_Ext_form_Slider) {
  _inheritsLoose(EWCSliderfield, _Ext_form_Slider);

  var _super = _createSuper(EWCSliderfield);

  function EWCSliderfield() {
    var _this;

    _this = _Ext_form_Slider.call(this, [], []) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return EWCSliderfield;
}(Ext_form_Slider);

export { EWCSliderfield as default };

try {
  window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
} catch (e) {
  window.customElements.define('ext-sliderfield', EWCSliderfield);
}