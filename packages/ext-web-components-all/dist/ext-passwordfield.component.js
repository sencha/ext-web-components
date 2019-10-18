import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Password from './Ext/form/Password.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPasswordfieldComponent =
/*#__PURE__*/
function (_Ext_form_Password) {
  _inheritsLoose(ExtPasswordfieldComponent, _Ext_form_Password);

  function ExtPasswordfieldComponent() {
    var _this;

    _this = _Ext_form_Password.call(this, [], []) || this;
    _this.xtype = 'passwordfield';
    return _this;
  }

  return ExtPasswordfieldComponent;
}(Ext_form_Password); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-passwordfield', ExtPasswordfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(ExtPasswordfieldComponent));