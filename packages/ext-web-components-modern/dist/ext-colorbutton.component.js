import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import ElementParser from './common/ElementParser.js';

var EWCColorbutton = /*#__PURE__*/function (_Ext_ux_colorpick_But) {
  _inheritsLoose(EWCColorbutton, _Ext_ux_colorpick_But);

  var _super = _createSuper(EWCColorbutton);

  function EWCColorbutton() {
    var _this;

    _this = _Ext_ux_colorpick_But.call(this, [], []) || this;
    _this.xtype = 'colorbutton';
    return _this;
  }

  return EWCColorbutton;
}(Ext_ux_colorpick_Button);

export { EWCColorbutton as default };

try {
  if (window.customElements.get('ext-colorbutton') == undefined) {
    window.customElements.define('ext-colorbutton', ElementParser.withParsedCallback(EWCColorbutton));
  }
} catch (e) {
  if (window.customElements.get('ext-colorbutton') == undefined) {
    window.customElements.define('ext-colorbutton', EWCColorbutton);
  }
}