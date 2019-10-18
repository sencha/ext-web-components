import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtDatepickernativefieldComponent =
/*#__PURE__*/
function (_Ext_form_DatePickerN) {
  _inheritsLoose(ExtDatepickernativefieldComponent, _Ext_form_DatePickerN);

  function ExtDatepickernativefieldComponent() {
    var _this;

    _this = _Ext_form_DatePickerN.call(this, [], []) || this;
    _this.xtype = 'datepickernativefield';
    return _this;
  }

  return ExtDatepickernativefieldComponent;
}(Ext_form_DatePickerNative); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepickernativefield', ExtDatepickernativefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(ExtDatepickernativefieldComponent));