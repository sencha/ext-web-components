import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DatePicker_Component from './Ext/DatePicker';
export var ExtDatepickerComponent =
/*#__PURE__*/
function (_Ext_DatePicker_Compo) {
  _inheritsLoose(ExtDatepickerComponent, _Ext_DatePicker_Compo);

  function ExtDatepickerComponent() {
    return _Ext_DatePicker_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtDatepickerComponent;
}(Ext_DatePicker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datepicker', ExtDatepickerComponent);
  });
})();