import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email from './Ext/form/Email.js';
import ElementParser from './common/ElementParser.js';

var EWCEmailfield = /*#__PURE__*/function (_Ext_form_Email) {
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

try {
  if (window.customElements.get('ext-emailfield') == undefined) {
    window.customElements.define('ext-emailfield', ElementParser.withParsedCallback(EWCEmailfield));
  }
} catch (e) {
  if (window.customElements.get('ext-emailfield') == undefined) {
    window.customElements.define('ext-emailfield', EWCEmailfield);
  }
}