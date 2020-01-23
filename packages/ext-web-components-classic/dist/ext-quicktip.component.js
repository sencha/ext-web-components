import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_QuickTip from './Ext/QuickTip.js';
import ElementParser from './ElementParser.js';

var EWCQuicktip =
/*#__PURE__*/
function (_Ext_QuickTip) {
  _inheritsLoose(EWCQuicktip, _Ext_QuickTip);

  function EWCQuicktip() {
    var _this;

    _this = _Ext_QuickTip.call(this, [], []) || this;
    _this.xtype = 'quicktip';
    return _this;
  }

  return EWCQuicktip;
}(Ext_QuickTip);

export { EWCQuicktip as default };

try {
  window.customElements.define('ext-quicktip', ElementParser.withParsedCallback(EWCQuicktip));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-quicktip', EWCQuicktip);
}