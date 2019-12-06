import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_Pie from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Pie.js';
import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSparklinepie =
/*#__PURE__*/
function (_Ext_sparkline_Pie) {
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
window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(EWCSparklinepie));