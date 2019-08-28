import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Clear_Component from './Ext/field/trigger/Clear';
export var ExtCleartriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Cl) {
  _inheritsLoose(ExtCleartriggerComponent, _Ext_field_trigger_Cl);

  function ExtCleartriggerComponent() {
    return _Ext_field_trigger_Cl.call(this, '', '', {}, '') || this;
  }

  return ExtCleartriggerComponent;
}(Ext_field_trigger_Clear_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-cleartrigger', ExtCleartriggerComponent);
  });
})();