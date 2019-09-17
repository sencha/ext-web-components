import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Text_Component from './Ext/form/Text';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTextfieldComponent =
/*#__PURE__*/
function (_Ext_form_Text_Compon) {
  _inheritsLoose(ExtTextfieldComponent, _Ext_form_Text_Compon);

  function ExtTextfieldComponent() {
    var _this;

    _this = _Ext_form_Text_Compon.call(this) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return ExtTextfieldComponent;
}(Ext_form_Text_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textfield', ExtTextfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfieldComponent));