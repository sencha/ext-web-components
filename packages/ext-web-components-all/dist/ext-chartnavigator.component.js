import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

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
}(Ext_chart_navigator_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chartnavigator', ExtChartnavigator);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtChartnavigator as default };
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigator)); //export default reactify(ExtChartnavigator);