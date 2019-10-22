import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(ExtTrigger, _Ext_field_trigger_Tr);

  function ExtTrigger() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return ExtTrigger;
}(Ext_field_trigger_Trigger);

export { ExtTrigger as default };
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(ExtTrigger));