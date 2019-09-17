import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea_Component from './Ext/form/TextArea';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTextareafieldComponent =
/*#__PURE__*/
function (_Ext_form_TextArea_Co) {
  _inheritsLoose(ExtTextareafieldComponent, _Ext_form_TextArea_Co);

  function ExtTextareafieldComponent() {
    var _this;

    _this = _Ext_form_TextArea_Co.call(this) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return ExtTextareafieldComponent;
}(Ext_form_TextArea_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textareafield', ExtTextareafieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafieldComponent));