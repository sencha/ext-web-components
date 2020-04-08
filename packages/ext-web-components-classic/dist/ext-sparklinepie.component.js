import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinepie = /*#__PURE__*/function (_Ext_sparkline_Pie) {
  _inheritsLoose(EWCSparklinepie, _Ext_sparkline_Pie);

  function EWCSparklinepie() {
    var _this;

    _this = _Ext_sparkline_Pie.call(this, [], []) || this;
    _this.xtype = 'sparklinepie';
    return _this;
  }

  return EWCSparklinepie;
}(Ext_sparkline_Pie);

export { EWCSparklinepie as default };

try {
  if (window.customElements.get('ext-sparklinepie') == undefined) {
    window.customElements.define('ext-sparklinepie', ElementParser.withParsedCallback(EWCSparklinepie));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinepie') == undefined) {
    window.customElements.define('ext-sparklinepie', EWCSparklinepie);
  }
}