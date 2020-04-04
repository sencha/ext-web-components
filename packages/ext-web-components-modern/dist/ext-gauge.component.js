import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import ElementParser from './common/ElementParser.js';

var EWCGauge = /*#__PURE__*/function (_Ext_ux_Gauge) {
  _inheritsLoose(EWCGauge, _Ext_ux_Gauge);

  var _super = _createSuper(EWCGauge);

  function EWCGauge() {
    var _this;

    _this = _Ext_ux_Gauge.call(this, [], []) || this;
    _this.xtype = 'gauge';
    return _this;
  }

  return EWCGauge;
}(Ext_ux_Gauge);

export { EWCGauge as default };

try {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', ElementParser.withParsedCallback(EWCGauge));
  }
} catch (e) {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', EWCGauge);
  }
}