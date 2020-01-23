import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import ElementParser from './ElementParser.js';

var EWCSparkline =
/*#__PURE__*/
function (_Ext_sparkline_Base) {
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
  window.customElements.define('ext-sparkline', ElementParser.withParsedCallback(EWCSparkline));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-sparkline', EWCSparkline);
}