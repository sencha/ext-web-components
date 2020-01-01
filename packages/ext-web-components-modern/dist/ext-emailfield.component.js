import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email from './Ext/form/Email.js';
import ElementParser from './ElementParser.js';

var EWCEmailfield =
/*#__PURE__*/
function (_Ext_form_Email) {
  _inheritsLoose(EWCEmailfield, _Ext_form_Email);

  function EWCEmailfield() {
    var _this;

    _this = _Ext_form_Email.call(this, [], []) || this;
    _this.xtype = 'emailfield';
    return _this;
  }

  return EWCEmailfield;
}(Ext_form_Email);

export { EWCEmailfield as default };
window.customElements.define('ext-emailfield', ElementParser.withParsedCallback(EWCEmailfield));