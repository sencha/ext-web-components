import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './common/ElementParser.js';

var EWCCartesian = /*#__PURE__*/function (_Ext_chart_Chart) {
  _inheritsLoose(EWCCartesian, _Ext_chart_Chart);

  function EWCCartesian() {
    var _this;

    _this = _Ext_chart_Chart.call(this, [], []) || this;
    _this.xtype = 'cartesian';
    return _this;
  }

  return EWCCartesian;
}(Ext_chart_Chart);

export { EWCCartesian as default };

try {
  if (window.customElements.get('ext-cartesian') == undefined) {
    window.customElements.define('ext-cartesian', ElementParser.withParsedCallback(EWCCartesian));
  }
} catch (e) {
  if (window.customElements.get('ext-cartesian') == undefined) {
    window.customElements.define('ext-cartesian', EWCCartesian);
  }
}