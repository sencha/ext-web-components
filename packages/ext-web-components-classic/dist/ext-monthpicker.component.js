import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MonthPicker from './Ext/MonthPicker.js';
import ElementParser from './common/ElementParser.js';

var EWCMonthpicker = /*#__PURE__*/function (_Ext_MonthPicker) {
  _inheritsLoose(EWCMonthpicker, _Ext_MonthPicker);

  function EWCMonthpicker() {
    var _this;

    _this = _Ext_MonthPicker.call(this, [], []) || this;
    _this.xtype = 'monthpicker';
    return _this;
  }

  return EWCMonthpicker;
}(Ext_MonthPicker);

export { EWCMonthpicker as default };

try {
  if (window.customElements.get('ext-monthpicker') == undefined) {
    window.customElements.define('ext-monthpicker', ElementParser.withParsedCallback(EWCMonthpicker));
  }
} catch (e) {
  if (window.customElements.get('ext-monthpicker') == undefined) {
    window.customElements.define('ext-monthpicker', EWCMonthpicker);
  }
}