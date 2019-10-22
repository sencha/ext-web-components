import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DatePicker from './Ext/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatepicker =
/*#__PURE__*/
function (_Ext_DatePicker) {
  _inheritsLoose(ExtDatepicker, _Ext_DatePicker);

  function ExtDatepicker() {
    var _this;

    _this = _Ext_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepicker';
    return _this;
  }

  return ExtDatepicker;
}(Ext_DatePicker);

export { ExtDatepicker as default };
window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepicker));