import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_SliderHue from './Ext/ux/colorpick/SliderHue.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickersliderhue = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickersliderhue, _Ext_ux_colorpick_Sli);

  var _super = _createSuper(EWCColorpickersliderhue);

  function EWCColorpickersliderhue() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickersliderhue';
    return _this;
  }

  return EWCColorpickersliderhue;
}(Ext_ux_colorpick_SliderHue);

export { EWCColorpickersliderhue as default };

try {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', ElementParser.withParsedCallback(EWCColorpickersliderhue));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', EWCColorpickersliderhue);
  }
}