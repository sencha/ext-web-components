import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input_Component from './Ext/field/Input';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtInputfieldComponent =
/*#__PURE__*/
function (_Ext_field_Input_Comp) {
  _inheritsLoose(ExtInputfieldComponent, _Ext_field_Input_Comp);

  function ExtInputfieldComponent() {
    var _this;

    _this = _Ext_field_Input_Comp.call(this) || this;
    _this.xtype = 'inputfield';
    return _this;
  }

  return ExtInputfieldComponent;
}(Ext_field_Input_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-inputfield', ExtInputfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfieldComponent));