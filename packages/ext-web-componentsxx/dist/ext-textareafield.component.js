import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea from './Ext/form/TextArea';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTextareafieldComponent =
/*#__PURE__*/
function (_Ext_form_TextArea) {
  _inheritsLoose(ExtTextareafieldComponent, _Ext_form_TextArea);

  function ExtTextareafieldComponent() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return ExtTextareafieldComponent;
}(Ext_form_TextArea); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textareafield', ExtTextareafieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafieldComponent));