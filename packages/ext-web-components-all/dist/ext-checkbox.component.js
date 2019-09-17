import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Checkbox_Component from './Ext/form/Checkbox';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCheckboxComponent =
/*#__PURE__*/
function (_Ext_form_Checkbox_Co) {
  _inheritsLoose(ExtCheckboxComponent, _Ext_form_Checkbox_Co);

  function ExtCheckboxComponent() {
    var _this;

    _this = _Ext_form_Checkbox_Co.call(this) || this;
    _this.xtype = 'checkbox';
    return _this;
  }

  return ExtCheckboxComponent;
}(Ext_form_Checkbox_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkbox', ExtCheckboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-checkbox', HTMLParsedElement.withParsedCallback(ExtCheckboxComponent));