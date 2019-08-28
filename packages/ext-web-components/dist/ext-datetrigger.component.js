import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Date_Component from './Ext/field/trigger/Date';
export var ExtDatetriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Da) {
  _inheritsLoose(ExtDatetriggerComponent, _Ext_field_trigger_Da);

  function ExtDatetriggerComponent() {
    return _Ext_field_trigger_Da.call(this, '', '', {}, '') || this;
  }

  return ExtDatetriggerComponent;
}(Ext_field_trigger_Date_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datetrigger', ExtDatetriggerComponent);
  });
})();