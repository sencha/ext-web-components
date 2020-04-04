import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './common/ElementParser.js';

var EWCChart = /*#__PURE__*/function (_Ext_chart_Chart) {
  _inheritsLoose(EWCChart, _Ext_chart_Chart);

  var _super = _createSuper(EWCChart);

  function EWCChart() {
    var _this;

    _this = _Ext_chart_Chart.call(this, [], []) || this;
    _this.xtype = 'chart';
    return _this;
  }

  return EWCChart;
}(Ext_chart_Chart);

export { EWCChart as default };

try {
  if (window.customElements.get('ext-chart') == undefined) {
    window.customElements.define('ext-chart', ElementParser.withParsedCallback(EWCChart));
  }
} catch (e) {
  if (window.customElements.get('ext-chart') == undefined) {
    window.customElements.define('ext-chart', EWCChart);
  }
}