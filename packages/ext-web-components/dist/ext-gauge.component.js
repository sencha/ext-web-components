import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Gauge from './Ext/ux/Gauge';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGaugeComponent =
/*#__PURE__*/
function (_Ext_ux_Gauge) {
  _inheritsLoose(ExtGaugeComponent, _Ext_ux_Gauge);

  function ExtGaugeComponent() {
    var _this;

    _this = _Ext_ux_Gauge.call(this, [], []) || this;
    _this.xtype = 'gauge';
    return _this;
  }

  return ExtGaugeComponent;
}(Ext_ux_Gauge); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gauge', ExtGaugeComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(ExtGaugeComponent));