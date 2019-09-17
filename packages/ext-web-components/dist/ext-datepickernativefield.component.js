import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_DatePickerNative_Component from './Ext/form/DatePickerNative';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatepickernativefieldComponent =
/*#__PURE__*/
function (_Ext_form_DatePickerN) {
  _inheritsLoose(ExtDatepickernativefieldComponent, _Ext_form_DatePickerN);

  function ExtDatepickernativefieldComponent() {
    var _this;

    _this = _Ext_form_DatePickerN.call(this, {}, [], []) || this;
    _this.xtype = 'datepickernativefield';
    return _this;
  }

  return ExtDatepickernativefieldComponent;
}(Ext_form_DatePickerNative_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepickernativefield', ExtDatepickernativefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(ExtDatepickernativefieldComponent));