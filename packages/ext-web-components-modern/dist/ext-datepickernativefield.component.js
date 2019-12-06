import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_DatePickerNative from '@sencha/ext-runtime-base/dist/./Ext/form/DatePickerNative.js';
import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDatepickernativefield =
/*#__PURE__*/
function (_Ext_form_DatePickerN) {
  _inheritsLoose(EWCDatepickernativefield, _Ext_form_DatePickerN);

  function EWCDatepickernativefield() {
    var _this;

    _this = _Ext_form_DatePickerN.call(this, [], []) || this;
    _this.xtype = 'datepickernativefield';
    return _this;
  }

  return EWCDatepickernativefield;
}(Ext_form_DatePickerNative);

export { EWCDatepickernativefield as default };
window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(EWCDatepickernativefield));