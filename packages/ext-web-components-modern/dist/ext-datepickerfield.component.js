import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_DatePicker from '@sencha/ext-runtime-base/dist/./Ext/field/DatePicker.js';
import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDatepickerfield =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
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
window.customElements.define('ext-datepickerfield', HTMLParsedElement.withParsedCallback(EWCDatepickerfield));