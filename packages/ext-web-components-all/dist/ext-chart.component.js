import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart_Component from './Ext/chart/Chart';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtChartComponent =
/*#__PURE__*/
function (_Ext_chart_Chart_Comp) {
  _inheritsLoose(ExtChartComponent, _Ext_chart_Chart_Comp);

  function ExtChartComponent() {
    var _this;

    _this = _Ext_chart_Chart_Comp.call(this) || this;
    _this.xtype = 'chart';
    return _this;
  }

  return ExtChartComponent;
}(Ext_chart_Chart_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chart', ExtChartComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chart', HTMLParsedElement.withParsedCallback(ExtChartComponent));