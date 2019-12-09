import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_field_DatePicker from '@sencha/ext-runtime-base/dist/./Ext/field/DatePicker.js';
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './ElementParser.js';

var EWCDatefield =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
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
window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));