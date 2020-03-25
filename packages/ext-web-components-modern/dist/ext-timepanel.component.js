import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Time from './Ext/panel/Time.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTimepanel = /*#__PURE__*/function (_Ext_panel_Time) {
  _inheritsLoose(EWCTimepanel, _Ext_panel_Time);

  var _super = _createSuper(EWCTimepanel);

  function EWCTimepanel() {
    var _this;

    _this = _Ext_panel_Time.call(this, [], []) || this;
    _this.xtype = 'timepanel';
    return _this;
  }

  return EWCTimepanel;
}(Ext_panel_Time);

export { EWCTimepanel as default };

try {
  window.customElements.define('ext-timepanel', ElementParser.withParsedCallback(EWCTimepanel));
} catch (e) {
  window.customElements.define('ext-timepanel', EWCTimepanel);
}