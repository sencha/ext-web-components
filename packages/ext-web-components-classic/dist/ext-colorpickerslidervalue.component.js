import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_SliderValue from './Ext/ux/colorpick/SliderValue.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickerslidervalue = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslidervalue, _Ext_ux_colorpick_Sli);

  var _super = _createSuper(EWCColorpickerslidervalue);

  function EWCColorpickerslidervalue() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslidervalue';
    return _this;
  }

  return EWCColorpickerslidervalue;
}(Ext_ux_colorpick_SliderValue);

export { EWCColorpickerslidervalue as default };

try {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', ElementParser.withParsedCallback(EWCColorpickerslidervalue));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', EWCColorpickerslidervalue);
  }
}