import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import ElementParser from './common/ElementParser.js';

var EWCGauge = /*#__PURE__*/function (_Ext_ux_Gauge) {
  _inheritsLoose(EWCGauge, _Ext_ux_Gauge);

  function EWCGauge() {
    var _this;

    _this = _Ext_ux_Gauge.call(this, [], []) || this;
    _this.xtype = 'gauge';
    return _this;
  }

  return EWCGauge;
}(Ext_ux_Gauge);

export { EWCGauge as default };

try {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', ElementParser.withParsedCallback(EWCGauge));
  }
} catch (e) {
  if (window.customElements.get('ext-gauge') == undefined) {
    window.customElements.define('ext-gauge', EWCGauge);
  }
}