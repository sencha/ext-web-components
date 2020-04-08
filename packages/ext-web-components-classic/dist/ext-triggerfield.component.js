import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Trigger from './Ext/form/Trigger.js';
import ElementParser from './common/ElementParser.js';

var EWCTriggerfield = /*#__PURE__*/function (_Ext_form_Trigger) {
  _inheritsLoose(EWCTriggerfield, _Ext_form_Trigger);

  function EWCTriggerfield() {
    var _this;

    _this = _Ext_form_Trigger.call(this, [], []) || this;
    _this.xtype = 'triggerfield';
    return _this;
  }

  return EWCTriggerfield;
}(Ext_form_Trigger);

export { EWCTriggerfield as default };

try {
  if (window.customElements.get('ext-triggerfield') == undefined) {
    window.customElements.define('ext-triggerfield', ElementParser.withParsedCallback(EWCTriggerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-triggerfield') == undefined) {
    window.customElements.define('ext-triggerfield', EWCTriggerfield);
  }
}