import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Reveal_Component from './Ext/field/trigger/Reveal';
export var ExtRevealtriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Re) {
  _inheritsLoose(ExtRevealtriggerComponent, _Ext_field_trigger_Re);

  function ExtRevealtriggerComponent() {
    return _Ext_field_trigger_Re.call(this, '', '', {}, '') || this;
  }

  return ExtRevealtriggerComponent;
}(Ext_field_trigger_Reveal_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-revealtrigger', ExtRevealtriggerComponent);
  });
})();