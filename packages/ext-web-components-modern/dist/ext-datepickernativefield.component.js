import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatepickernativefield = /*#__PURE__*/function (_Ext_form_DatePickerN) {
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

try {
  window.customElements.define('ext-datepickernativefield', ElementParser.withParsedCallback(EWCDatepickernativefield));
} catch (e) {
  window.customElements.define('ext-datepickernativefield', EWCDatepickernativefield);
}