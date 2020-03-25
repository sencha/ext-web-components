import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import ElementParser from './runtime/ElementParser.js';

var EWCChartnavigator = /*#__PURE__*/function (_Ext_chart_navigator_) {
  _inheritsLoose(EWCChartnavigator, _Ext_chart_navigator_);

  var _super = _createSuper(EWCChartnavigator);

  function EWCChartnavigator() {
    var _this;

    _this = _Ext_chart_navigator_.call(this, [], []) || this;
    _this.xtype = 'chartnavigator';
    return _this;
  }

  return EWCChartnavigator;
}(Ext_chart_navigator_Container);

export { EWCChartnavigator as default };

try {
  window.customElements.define('ext-chartnavigator', ElementParser.withParsedCallback(EWCChartnavigator));
} catch (e) {
  window.customElements.define('ext-chartnavigator', EWCChartnavigator);
}