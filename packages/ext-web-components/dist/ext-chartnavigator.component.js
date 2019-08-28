import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_Container_Component from './Ext/chart/navigator/Container';
export var ExtChartnavigatorComponent =
/*#__PURE__*/
function (_Ext_chart_navigator_) {
  _inheritsLoose(ExtChartnavigatorComponent, _Ext_chart_navigator_);

  function ExtChartnavigatorComponent() {
    return _Ext_chart_navigator_.call(this, '', '', {}, '') || this;
  }

  return ExtChartnavigatorComponent;
}(Ext_chart_navigator_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-chartnavigator', ExtChartnavigatorComponent);
  });
})();