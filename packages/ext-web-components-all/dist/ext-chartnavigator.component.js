import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtChartnavigatorComponent =
/*#__PURE__*/
function (_Ext_chart_navigator_) {
  _inheritsLoose(ExtChartnavigatorComponent, _Ext_chart_navigator_);

  function ExtChartnavigatorComponent() {
    var _this;

    _this = _Ext_chart_navigator_.call(this, [], []) || this;
    _this.xtype = 'chartnavigator';
    return _this;
  }

  return ExtChartnavigatorComponent;
}(Ext_chart_navigator_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chartnavigator', ExtChartnavigatorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigatorComponent));