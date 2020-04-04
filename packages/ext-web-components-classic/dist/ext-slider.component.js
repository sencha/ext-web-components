import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './common/ElementParser.js';

var EWCSlider = /*#__PURE__*/function (_Ext_slider_Slider) {
  _inheritsLoose(EWCSlider, _Ext_slider_Slider);

  var _super = _createSuper(EWCSlider);

  function EWCSlider() {
    var _this;

    _this = _Ext_slider_Slider.call(this, [], []) || this;
    _this.xtype = 'slider';
    return _this;
  }

  return EWCSlider;
}(Ext_slider_Slider);

export { EWCSlider as default };

try {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', ElementParser.withParsedCallback(EWCSlider));
  }
} catch (e) {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', EWCSlider);
  }
}