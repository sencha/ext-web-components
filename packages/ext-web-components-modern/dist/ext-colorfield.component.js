import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import ElementParser from './common/ElementParser.js';

var EWCColorfield = /*#__PURE__*/function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(EWCColorfield, _Ext_ux_colorpick_Fie);

  var _super = _createSuper(EWCColorfield);

  function EWCColorfield() {
    var _this;

    _this = _Ext_ux_colorpick_Fie.call(this, [], []) || this;
    _this.xtype = 'colorfield';
    return _this;
  }

  return EWCColorfield;
}(Ext_ux_colorpick_Field);

export { EWCColorfield as default };

try {
  if (window.customElements.get('ext-colorfield') == undefined) {
    window.customElements.define('ext-colorfield', ElementParser.withParsedCallback(EWCColorfield));
  }
} catch (e) {
  if (window.customElements.get('ext-colorfield') == undefined) {
    window.customElements.define('ext-colorfield', EWCColorfield);
  }
}