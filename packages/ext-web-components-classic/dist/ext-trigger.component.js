import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './ElementParser.js';

var EWCTrigger =
/*#__PURE__*/
function (_Ext_form_Trigger) {
  _inheritsLoose(EWCTrigger, _Ext_form_Trigger);

  function EWCTrigger() {
    var _this;

    _this = _Ext_form_Trigger.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return EWCTrigger;
}(Ext_form_Trigger);

export { EWCTrigger as default };

try {
  window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
} catch (e) {
  window.customElements.define('ext-trigger', EWCTrigger);
}