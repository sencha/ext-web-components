import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSparklineline =
/*#__PURE__*/
function (_Ext_sparkline_Line) {
  _inheritsLoose(EWCSparklineline, _Ext_sparkline_Line);

  function EWCSparklineline() {
    var _this;

    _this = _Ext_sparkline_Line.call(this, [], []) || this;
    _this.xtype = 'sparklineline';
    return _this;
  }

  return EWCSparklineline;
}(Ext_sparkline_Line);

export { EWCSparklineline as default };

try {
  window.customElements.define('ext-sparklineline', ElementParser.withParsedCallback(EWCSparklineline));
} catch (e) {
  window.customElements.define('ext-sparklineline', EWCSparklineline);
}