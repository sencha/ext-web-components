import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DatePicker_Component from './Ext/DatePicker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatepickerComponent =
/*#__PURE__*/
function (_Ext_DatePicker_Compo) {
  _inheritsLoose(ExtDatepickerComponent, _Ext_DatePicker_Compo);

  function ExtDatepickerComponent() {
    var _this;

    _this = _Ext_DatePicker_Compo.call(this, {}, [], []) || this;
    _this.xtype = 'datepicker';
    return _this;
  }

  return ExtDatepickerComponent;
}(Ext_DatePicker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepicker', ExtDatepickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepickerComponent));