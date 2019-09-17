import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Legend_Component from './Ext/chart/Legend';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLegendComponent =
/*#__PURE__*/
function (_Ext_chart_Legend_Com) {
  _inheritsLoose(ExtLegendComponent, _Ext_chart_Legend_Com);

  function ExtLegendComponent() {
    var _this;

    _this = _Ext_chart_Legend_Com.call(this) || this;
    _this.xtype = 'legend';
    return _this;
  }

  return ExtLegendComponent;
}(Ext_chart_Legend_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-legend', ExtLegendComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(ExtLegendComponent));