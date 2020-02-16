import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ActionSheet from './Ext/ActionSheet.js';
import ElementParser from './runtime/ElementParser.js';

var EWCActionsheet =
/*#__PURE__*/
function (_Ext_ActionSheet) {
  _inheritsLoose(EWCActionsheet, _Ext_ActionSheet);

  function EWCActionsheet() {
    var _this;

    _this = _Ext_ActionSheet.call(this, [], []) || this;
    _this.xtype = 'actionsheet';
    return _this;
  }

  return EWCActionsheet;
}(Ext_ActionSheet);

export { EWCActionsheet as default };

try {
  window.customElements.define('ext-actionsheet', ElementParser.withParsedCallback(EWCActionsheet));
} catch (e) {
  window.customElements.define('ext-actionsheet', EWCActionsheet);
}