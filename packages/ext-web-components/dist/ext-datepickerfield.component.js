import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker_Component from './Ext/field/DatePicker';
export var ExtDatepickerfieldComponent =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
  _inheritsLoose(ExtDatepickerfieldComponent, _Ext_field_DatePicker);

  function ExtDatepickerfieldComponent() {
    return _Ext_field_DatePicker.call(this, '', '', {}, '') || this;
  }

  return ExtDatepickerfieldComponent;
}(Ext_field_DatePicker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datepickerfield', ExtDatepickerfieldComponent);
  });
})();