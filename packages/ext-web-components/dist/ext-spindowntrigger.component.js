import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinDown_Component from './Ext/field/trigger/SpinDown';
export var ExtSpindowntriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpindowntriggerComponent, _Ext_field_trigger_Sp);

  function ExtSpindowntriggerComponent() {
    return _Ext_field_trigger_Sp.call(this, '', '', {}, '') || this;
  }

  return ExtSpindowntriggerComponent;
}(Ext_field_trigger_SpinDown_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-spindowntrigger', ExtSpindowntriggerComponent);
  });
})();