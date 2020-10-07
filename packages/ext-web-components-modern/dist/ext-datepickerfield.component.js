import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './common/ElementParser.js';

var EWCDatepickerfield = /*#__PURE__*/function (_Ext_field_DatePicker) {
  _inheritsLoose(EWCDatepickerfield, _Ext_field_DatePicker);

  function EWCDatepickerfield() {
    var _this;

    _this = _Ext_field_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepickerfield';
    return _this;
  }

  return EWCDatepickerfield;
}(Ext_field_DatePicker);

export { EWCDatepickerfield as default };

try {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', ElementParser.withParsedCallback(EWCDatepickerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', EWCDatepickerfield);
  }
}