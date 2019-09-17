import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_PolarChart_Component from './Ext/chart/PolarChart';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPolarComponent =
/*#__PURE__*/
function (_Ext_chart_PolarChart) {
  _inheritsLoose(ExtPolarComponent, _Ext_chart_PolarChart);

  function ExtPolarComponent() {
    var _this;

    _this = _Ext_chart_PolarChart.call(this, {}, [], []) || this;
    _this.xtype = 'polar';
    return _this;
  }

  return ExtPolarComponent;
}(Ext_chart_PolarChart_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-polar', ExtPolarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(ExtPolarComponent));