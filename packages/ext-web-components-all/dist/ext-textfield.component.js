import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTextfieldComponent =
/*#__PURE__*/
function (_Ext_form_Text) {
  _inheritsLoose(ExtTextfieldComponent, _Ext_form_Text);

  function ExtTextfieldComponent() {
    var _this;

    _this = _Ext_form_Text.call(this, [], []) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return ExtTextfieldComponent;
}(Ext_form_Text); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textfield', ExtTextfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfieldComponent));