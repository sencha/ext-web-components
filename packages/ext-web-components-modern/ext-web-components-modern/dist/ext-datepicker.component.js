import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DatePicker from './Ext/DatePicker.js';
import ElementParser from './common/ElementParser.js';

var EWCDatepicker = /*#__PURE__*/function (_Ext_DatePicker) {
  _inheritsLoose(EWCDatepicker, _Ext_DatePicker);

  function EWCDatepicker() {
    var _this;

    _this = _Ext_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepicker';
    return _this;
  }

  return EWCDatepicker;
}(Ext_DatePicker);

export { EWCDatepicker as default };

try {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', ElementParser.withParsedCallback(EWCDatepicker));
  }
} catch (e) {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', EWCDatepicker);
  }
}