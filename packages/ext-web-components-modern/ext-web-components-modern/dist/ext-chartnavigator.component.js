import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCChartnavigator = /*#__PURE__*/function (_Ext_chart_navigator_) {
  _inheritsLoose(EWCChartnavigator, _Ext_chart_navigator_);

  function EWCChartnavigator() {
    var _this;

    _this = _Ext_chart_navigator_.call(this, [], []) || this;
    _this.xtype = 'chartnavigator';
    return _this;
  }

  return EWCChartnavigator;
}(Ext_chart_navigator_Container);

export { EWCChartnavigator as default };

try {
  if (window.customElements.get('ext-chartnavigator') == undefined) {
    window.customElements.define('ext-chartnavigator', ElementParser.withParsedCallback(EWCChartnavigator));
  }
} catch (e) {
  if (window.customElements.get('ext-chartnavigator') == undefined) {
    window.customElements.define('ext-chartnavigator', EWCChartnavigator);
  }
}