import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCartesian =
/*#__PURE__*/
function (_Ext_chart_Chart) {
  _inheritsLoose(ExtCartesian, _Ext_chart_Chart);

  function ExtCartesian() {
    var _this;

    _this = _Ext_chart_Chart.call(this, [], []) || this;
    _this.xtype = 'cartesian';
    return _this;
  }

  return ExtCartesian;
}(Ext_chart_Chart);

export { ExtCartesian as default };
window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesian));