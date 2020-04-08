import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import ElementParser from './common/ElementParser.js';

var EWCSparkline = /*#__PURE__*/function (_Ext_sparkline_Base) {
  _inheritsLoose(EWCSparkline, _Ext_sparkline_Base);

  function EWCSparkline() {
    var _this;

    _this = _Ext_sparkline_Base.call(this, [], []) || this;
    _this.xtype = 'sparkline';
    return _this;
  }

  return EWCSparkline;
}(Ext_sparkline_Base);

export { EWCSparkline as default };

try {
  if (window.customElements.get('ext-sparkline') == undefined) {
    window.customElements.define('ext-sparkline', ElementParser.withParsedCallback(EWCSparkline));
  }
} catch (e) {
  if (window.customElements.get('ext-sparkline') == undefined) {
    window.customElements.define('ext-sparkline', EWCSparkline);
  }
}