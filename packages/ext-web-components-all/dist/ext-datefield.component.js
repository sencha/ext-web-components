import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_DatePicker_Component from './Ext/field/DatePicker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatefieldComponent =
/*#__PURE__*/
function (_Ext_field_DatePicker) {
  _inheritsLoose(ExtDatefieldComponent, _Ext_field_DatePicker);

  function ExtDatefieldComponent() {
    var _this;

    _this = _Ext_field_DatePicker.call(this) || this;
    _this.xtype = 'datefield';
    return _this;
  }

  return ExtDatefieldComponent;
}(Ext_field_DatePicker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datefield', ExtDatefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datefield', HTMLParsedElement.withParsedCallback(ExtDatefieldComponent));