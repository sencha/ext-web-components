import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Checkbox_Component from './Ext/form/Checkbox';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCheckboxfieldComponent =
/*#__PURE__*/
function (_Ext_form_Checkbox_Co) {
  _inheritsLoose(ExtCheckboxfieldComponent, _Ext_form_Checkbox_Co);

  function ExtCheckboxfieldComponent() {
    var _this;

    _this = _Ext_form_Checkbox_Co.call(this) || this;
    _this.xtype = 'checkboxfield';
    return _this;
  }

  return ExtCheckboxfieldComponent;
}(Ext_form_Checkbox_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkboxfield', ExtCheckboxfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-checkboxfield', HTMLParsedElement.withParsedCallback(ExtCheckboxfieldComponent));