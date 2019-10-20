import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea from './Ext/form/TextArea.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

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
}(Ext_form_TextArea); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textareafield', ExtTextareafield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTextareafield as default };
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafield)); //export default reactify(ExtTextareafield);