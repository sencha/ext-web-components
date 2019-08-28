import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger_Component from './Ext/field/trigger/Trigger';
export var ExtTriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(ExtTriggerComponent, _Ext_field_trigger_Tr);

  function ExtTriggerComponent() {
    return _Ext_field_trigger_Tr.call(this, '', '', {}, '') || this;
  }

  return ExtTriggerComponent;
}(Ext_field_trigger_Trigger_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-trigger', ExtTriggerComponent);
  });
})();