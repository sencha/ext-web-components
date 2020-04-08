import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinebox = /*#__PURE__*/function (_Ext_sparkline_Box) {
  _inheritsLoose(EWCSparklinebox, _Ext_sparkline_Box);

  function EWCSparklinebox() {
    var _this;

    _this = _Ext_sparkline_Box.call(this, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return EWCSparklinebox;
}(Ext_sparkline_Box);

export { EWCSparklinebox as default };

try {
  if (window.customElements.get('ext-sparklinebox') == undefined) {
    window.customElements.define('ext-sparklinebox', ElementParser.withParsedCallback(EWCSparklinebox));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinebox') == undefined) {
    window.customElements.define('ext-sparklinebox', EWCSparklinebox);
  }
}