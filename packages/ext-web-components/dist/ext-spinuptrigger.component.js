import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinUp_Component from './Ext/field/trigger/SpinUp';
export var ExtSpinuptriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpinuptriggerComponent, _Ext_field_trigger_Sp);

  function ExtSpinuptriggerComponent() {
    return _Ext_field_trigger_Sp.call(this, '', '', {}, '') || this;
  }

  return ExtSpinuptriggerComponent;
}(Ext_field_trigger_SpinUp_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-spinuptrigger', ExtSpinuptriggerComponent);
  });
})();