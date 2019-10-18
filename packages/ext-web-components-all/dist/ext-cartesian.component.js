import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCartesianComponent =
/*#__PURE__*/
function (_Ext_chart_Chart) {
  _inheritsLoose(ExtCartesianComponent, _Ext_chart_Chart);

  function ExtCartesianComponent() {
    var _this;

    _this = _Ext_chart_Chart.call(this, [], []) || this;
    _this.xtype = 'cartesian';
    return _this;
  }

  return ExtCartesianComponent;
}(Ext_chart_Chart); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-cartesian', ExtCartesianComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesianComponent));