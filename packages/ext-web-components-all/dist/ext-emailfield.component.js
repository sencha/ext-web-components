import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email from './Ext/form/Email.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtEmailfield =
/*#__PURE__*/
function (_Ext_form_Email) {
  _inheritsLoose(ExtEmailfield, _Ext_form_Email);

  function ExtEmailfield() {
    var _this;

    _this = _Ext_form_Email.call(this, [], []) || this;
    _this.xtype = 'emailfield';
    return _this;
  }

  return ExtEmailfield;
}(Ext_form_Email);

export { ExtEmailfield as default };
window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfield));