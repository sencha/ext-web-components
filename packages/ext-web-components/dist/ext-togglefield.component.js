import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Toggle_Component from './Ext/form/Toggle';
export var ExtTogglefieldComponent =
/*#__PURE__*/
function (_Ext_form_Toggle_Comp) {
  _inheritsLoose(ExtTogglefieldComponent, _Ext_form_Toggle_Comp);

  function ExtTogglefieldComponent() {
    return _Ext_form_Toggle_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtTogglefieldComponent;
}(Ext_form_Toggle_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-togglefield', ExtTogglefieldComponent);
  });
})();