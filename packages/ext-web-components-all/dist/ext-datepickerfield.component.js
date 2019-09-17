import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker_Component from './Ext/field/DatePicker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatepickerfieldComponent =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
  _inheritsLoose(ExtDatepickerfieldComponent, _Ext_field_DatePicker);

  function ExtDatepickerfieldComponent() {
    var _this;

    _this = _Ext_field_DatePicker.call(this) || this;
    _this.xtype = 'datepickerfield';
    return _this;
  }

  return ExtDatepickerfieldComponent;
}(Ext_field_DatePicker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepickerfield', ExtDatepickerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepickerfield', HTMLParsedElement.withParsedCallback(ExtDatepickerfieldComponent));