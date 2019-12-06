import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_trigger_Trigger from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Trigger.js';
import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(EWCTrigger, _Ext_field_trigger_Tr);

  function EWCTrigger() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return EWCTrigger;
}(Ext_field_trigger_Trigger);

export { EWCTrigger as default };
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(EWCTrigger));