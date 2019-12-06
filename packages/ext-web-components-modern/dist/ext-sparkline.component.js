import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_Base from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Base.js';
import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(EWCSparkline));