import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_Bar from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Bar.js';
import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSparklinebar =
/*#__PURE__*/
function (_Ext_sparkline_Bar) {
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
window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(EWCSparklinebar));