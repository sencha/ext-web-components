import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email_Component from './Ext/form/Email';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtEmailfieldComponent =
/*#__PURE__*/
function (_Ext_form_Email_Compo) {
  _inheritsLoose(ExtEmailfieldComponent, _Ext_form_Email_Compo);

  function ExtEmailfieldComponent() {
    var _this;

    _this = _Ext_form_Email_Compo.call(this, {}, [], []) || this;
    _this.xtype = 'emailfield';
    return _this;
  }

  return ExtEmailfieldComponent;
}(Ext_form_Email_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emailfield', ExtEmailfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfieldComponent));