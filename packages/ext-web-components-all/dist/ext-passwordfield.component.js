import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Password_Component from './Ext/form/Password';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPasswordfieldComponent =
/*#__PURE__*/
function (_Ext_form_Password_Co) {
  _inheritsLoose(ExtPasswordfieldComponent, _Ext_form_Password_Co);

  function ExtPasswordfieldComponent() {
    var _this;

    _this = _Ext_form_Password_Co.call(this) || this;
    _this.xtype = 'passwordfield';
    return _this;
  }

  return ExtPasswordfieldComponent;
}(Ext_form_Password_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-passwordfield', ExtPasswordfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(ExtPasswordfieldComponent));