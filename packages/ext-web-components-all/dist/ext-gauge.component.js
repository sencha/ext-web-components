import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGauge =
/*#__PURE__*/
function (_Ext_ux_Gauge) {
  _inheritsLoose(ExtGauge, _Ext_ux_Gauge);

  function ExtGauge() {
    var _this;

    _this = _Ext_ux_Gauge.call(this, [], []) || this;
    _this.xtype = 'gauge';
    return _this;
  }

  return ExtGauge;
}(Ext_ux_Gauge);

export { ExtGauge as default };
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(ExtGauge));