import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSparklinebox =
/*#__PURE__*/
function (_Ext_sparkline_Box) {
  _inheritsLoose(ExtSparklinebox, _Ext_sparkline_Box);

  function ExtSparklinebox() {
    var _this;

    _this = _Ext_sparkline_Box.call(this, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return ExtSparklinebox;
}(Ext_sparkline_Box);

export { ExtSparklinebox as default };
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklinebox));