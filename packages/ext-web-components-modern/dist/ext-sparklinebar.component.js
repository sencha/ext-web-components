import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinebar = /*#__PURE__*/function (_Ext_sparkline_Bar) {
  _inheritsLoose(EWCSparklinebar, _Ext_sparkline_Bar);

  function EWCSparklinebar() {
    var _this;

    _this = _Ext_sparkline_Bar.call(this, [], []) || this;
    _this.xtype = 'sparklinebar';
    return _this;
  }

  return EWCSparklinebar;
}(Ext_sparkline_Bar);

export { EWCSparklinebar as default };

try {
  if (window.customElements.get('ext-sparklinebar') == undefined) {
    window.customElements.define('ext-sparklinebar', ElementParser.withParsedCallback(EWCSparklinebar));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinebar') == undefined) {
    window.customElements.define('ext-sparklinebar', EWCSparklinebar);
  }
}