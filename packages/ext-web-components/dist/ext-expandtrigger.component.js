import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand_Component from './Ext/field/trigger/Expand';
export var ExtExpandtriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(ExtExpandtriggerComponent, _Ext_field_trigger_Ex);

  function ExtExpandtriggerComponent() {
    return _Ext_field_trigger_Ex.call(this, '', '', {}, '') || this;
  }

  return ExtExpandtriggerComponent;
}(Ext_field_trigger_Expand_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-expandtrigger', ExtExpandtriggerComponent);
  });
})();