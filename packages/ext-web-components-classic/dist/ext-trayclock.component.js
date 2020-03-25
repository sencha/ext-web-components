import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_desktop_TrayClock from './Ext/ux/desktop/TrayClock.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTrayclock = /*#__PURE__*/function (_Ext_ux_desktop_TrayC) {
  _inheritsLoose(EWCTrayclock, _Ext_ux_desktop_TrayC);

  var _super = _createSuper(EWCTrayclock);

  function EWCTrayclock() {
    var _this;

    _this = _Ext_ux_desktop_TrayC.call(this, [], []) || this;
    _this.xtype = 'trayclock';
    return _this;
  }

  return EWCTrayclock;
}(Ext_ux_desktop_TrayClock);

export { EWCTrayclock as default };

try {
  window.customElements.define('ext-trayclock', ElementParser.withParsedCallback(EWCTrayclock));
} catch (e) {
  window.customElements.define('ext-trayclock', EWCTrayclock);
}