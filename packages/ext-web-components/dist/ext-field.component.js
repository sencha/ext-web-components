import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Field_Component from './Ext/form/Field';
export var ExtFieldComponent =
/*#__PURE__*/
function (_Ext_form_Field_Compo) {
  _inheritsLoose(ExtFieldComponent, _Ext_form_Field_Compo);

  function ExtFieldComponent() {
    return _Ext_form_Field_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtFieldComponent;
}(Ext_form_Field_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-field', ExtFieldComponent);
  });
})();