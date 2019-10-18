import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DatePicker from './Ext/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtDatepickerComponent =
/*#__PURE__*/
function (_Ext_DatePicker) {
  _inheritsLoose(ExtDatepickerComponent, _Ext_DatePicker);

  function ExtDatepickerComponent() {
    var _this;

    _this = _Ext_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepicker';
    return _this;
  }

  return ExtDatepickerComponent;
}(Ext_DatePicker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepicker', ExtDatepickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepickerComponent));