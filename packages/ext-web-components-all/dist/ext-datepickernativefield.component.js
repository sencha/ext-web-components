import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatepickernativefield =
/*#__PURE__*/
function (_Ext_form_DatePickerN) {
  _inheritsLoose(ExtDatepickernativefield, _Ext_form_DatePickerN);

  function ExtDatepickernativefield() {
    var _this;

    _this = _Ext_form_DatePickerN.call(this, [], []) || this;
    _this.xtype = 'datepickernativefield';
    return _this;
  }

  return ExtDatepickernativefield;
}(Ext_form_DatePickerNative);

export { ExtDatepickernativefield as default };
window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(ExtDatepickernativefield));