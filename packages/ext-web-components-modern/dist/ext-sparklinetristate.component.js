import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinetristate = /*#__PURE__*/function (_Ext_sparkline_TriSta) {
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

try {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', ElementParser.withParsedCallback(EWCSparklinetristate));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', EWCSparklinetristate);
  }
}