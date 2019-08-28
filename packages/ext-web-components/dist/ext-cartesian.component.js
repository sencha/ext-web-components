import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart_Component from './Ext/chart/Chart';
export var ExtCartesianComponent =
/*#__PURE__*/
function (_Ext_chart_Chart_Comp) {
  _inheritsLoose(ExtCartesianComponent, _Ext_chart_Chart_Comp);

  function ExtCartesianComponent() {
    return _Ext_chart_Chart_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtCartesianComponent;
}(Ext_chart_Chart_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-cartesian', ExtCartesianComponent);
  });
})();