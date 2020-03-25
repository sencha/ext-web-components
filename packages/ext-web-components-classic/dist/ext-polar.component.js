import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPolar = /*#__PURE__*/function (_Ext_chart_PolarChart) {
  _inheritsLoose(EWCPolar, _Ext_chart_PolarChart);

  var _super = _createSuper(EWCPolar);

  function EWCPolar() {
    var _this;

    _this = _Ext_chart_PolarChart.call(this, [], []) || this;
    _this.xtype = 'polar';
    return _this;
  }

  return EWCPolar;
}(Ext_chart_PolarChart);

export { EWCPolar as default };

try {
  window.customElements.define('ext-polar', ElementParser.withParsedCallback(EWCPolar));
} catch (e) {
  window.customElements.define('ext-polar', EWCPolar);
}