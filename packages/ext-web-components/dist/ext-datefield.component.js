import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker_Component from './Ext/field/DatePicker';
export var ExtDatefieldComponent =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
  _inheritsLoose(ExtDatefieldComponent, _Ext_field_DatePicker);

  function ExtDatefieldComponent() {
    return _Ext_field_DatePicker.call(this, '', '', {}, '') || this;
  }

  return ExtDatefieldComponent;
}(Ext_field_DatePicker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datefield', ExtDatefieldComponent);
  });
})();