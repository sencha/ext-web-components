import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel_Component from './Ext/field/Panel';
export var ExtFieldpanelComponent =
/*#__PURE__*/
function (_Ext_field_Panel_Comp) {
  _inheritsLoose(ExtFieldpanelComponent, _Ext_field_Panel_Comp);

  function ExtFieldpanelComponent() {
    return _Ext_field_Panel_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtFieldpanelComponent;
}(Ext_field_Panel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-fieldpanel', ExtFieldpanelComponent);
  });
})();