import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_DatePickerNative_Component from './Ext/form/DatePickerNative';
export var ExtDatepickernativefieldComponent =
/*#__PURE__*/
function (_Ext_form_DatePickerN) {
  _inheritsLoose(ExtDatepickernativefieldComponent, _Ext_form_DatePickerN);

  function ExtDatepickernativefieldComponent() {
    return _Ext_form_DatePickerN.call(this, '', '', {}, '') || this;
  }

  return ExtDatepickernativefieldComponent;
}(Ext_form_DatePickerNative_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datepickernativefield', ExtDatepickernativefieldComponent);
  });
})();