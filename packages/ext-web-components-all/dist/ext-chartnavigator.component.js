import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtChartnavigator =
/*#__PURE__*/
function (_Ext_chart_navigator_) {
  _inheritsLoose(ExtChartnavigator, _Ext_chart_navigator_);

  function ExtChartnavigator() {
    var _this;

    _this = _Ext_chart_navigator_.call(this, [], []) || this;
    _this.xtype = 'chartnavigator';
    return _this;
  }

  return ExtChartnavigator;
}(Ext_chart_navigator_Container);

export { ExtChartnavigator as default };
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigator));