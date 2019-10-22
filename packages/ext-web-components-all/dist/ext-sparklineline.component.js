import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSparklineline =
/*#__PURE__*/
function (_Ext_sparkline_Line) {
  _inheritsLoose(ExtSparklineline, _Ext_sparkline_Line);

  function ExtSparklineline() {
    var _this;

    _this = _Ext_sparkline_Line.call(this, [], []) || this;
    _this.xtype = 'sparklineline';
    return _this;
  }

  return ExtSparklineline;
}(Ext_sparkline_Line);

export { ExtSparklineline as default };
window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklineline));