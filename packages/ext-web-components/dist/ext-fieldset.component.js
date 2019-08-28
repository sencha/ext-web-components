import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldSet_Component from './Ext/form/FieldSet';
export var ExtFieldsetComponent =
/*#__PURE__*/
function (_Ext_form_FieldSet_Co) {
  _inheritsLoose(ExtFieldsetComponent, _Ext_form_FieldSet_Co);

  function ExtFieldsetComponent() {
    return _Ext_form_FieldSet_Co.call(this, '', '', {}, '') || this;
  }

  return ExtFieldsetComponent;
}(Ext_form_FieldSet_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-fieldset', ExtFieldsetComponent);
  });
})();