import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_ActionSheet from '@sencha/ext-runtime-base/dist/./Ext/ActionSheet.js';
import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(EWCActionsheet));