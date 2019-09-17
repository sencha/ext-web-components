import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart_Component from './Ext/chart/Chart';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCartesianComponent =
/*#__PURE__*/
function (_Ext_chart_Chart_Comp) {
  _inheritsLoose(ExtCartesianComponent, _Ext_chart_Chart_Comp);

  function ExtCartesianComponent() {
    var _this;

    _this = _Ext_chart_Chart_Comp.call(this, {}, [], []) || this;
    _this.xtype = 'cartesian';
    return _this;
  }

  return ExtCartesianComponent;
}(Ext_chart_Chart_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-cartesian', ExtCartesianComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesianComponent));