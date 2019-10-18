import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email from './Ext/form/Email.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtEmailfieldComponent =
/*#__PURE__*/
function (_Ext_form_Email) {
  _inheritsLoose(ExtEmailfieldComponent, _Ext_form_Email);

  function ExtEmailfieldComponent() {
    var _this;

    _this = _Ext_form_Email.call(this, [], []) || this;
    _this.xtype = 'emailfield';
    return _this;
  }

  return ExtEmailfieldComponent;
}(Ext_form_Email); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emailfield', ExtEmailfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfieldComponent));