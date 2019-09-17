import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Field_Component from './Ext/form/Field';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFieldComponent =
/*#__PURE__*/
function (_Ext_form_Field_Compo) {
  _inheritsLoose(ExtFieldComponent, _Ext_form_Field_Compo);

  function ExtFieldComponent() {
    var _this;

    _this = _Ext_form_Field_Compo.call(this) || this;
    _this.xtype = 'field';
    return _this;
  }

  return ExtFieldComponent;
}(Ext_form_Field_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-field', ExtFieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(ExtFieldComponent));