import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input_Component from './Ext/field/Input';
export var ExtInputfieldComponent =
/*#__PURE__*/
function (_Ext_field_Input_Comp) {
  _inheritsLoose(ExtInputfieldComponent, _Ext_field_Input_Comp);

  function ExtInputfieldComponent() {
    return _Ext_field_Input_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtInputfieldComponent;
}(Ext_field_Input_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-inputfield', ExtInputfieldComponent);
  });
})();