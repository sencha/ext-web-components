import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea from './Ext/form/TextArea.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTextareafield =
/*#__PURE__*/
function (_Ext_form_TextArea) {
  _inheritsLoose(ExtTextareafield, _Ext_form_TextArea);

  function ExtTextareafield() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return ExtTextareafield;
}(Ext_form_TextArea);

export { ExtTextareafield as default };
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafield));