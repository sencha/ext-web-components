import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatefield = /*#__PURE__*/function (_Ext_field_DatePicker) {
  _inheritsLoose(EWCDatefield, _Ext_field_DatePicker);

  function EWCDatefield() {
    var _this;

    _this = _Ext_field_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datefield';
    return _this;
  }

  return EWCDatefield;
}(Ext_field_DatePicker);

export { EWCDatefield as default };

try {
  window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
} catch (e) {
  window.customElements.define('ext-datefield', EWCDatefield);
}