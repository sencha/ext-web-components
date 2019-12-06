import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_TriState from '@sencha/ext-runtime-base/dist/./Ext/sparkline/TriState.js';
import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSparklinetristate =
/*#__PURE__*/
function (_Ext_sparkline_TriSta) {
  _inheritsLoose(EWCSparklinetristate, _Ext_sparkline_TriSta);

  function EWCSparklinetristate() {
    var _this;

    _this = _Ext_sparkline_TriSta.call(this, [], []) || this;
    _this.xtype = 'sparklinetristate';
    return _this;
  }

  return EWCSparklinetristate;
}(Ext_sparkline_TriState);

export { EWCSparklinetristate as default };
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(EWCSparklinetristate));