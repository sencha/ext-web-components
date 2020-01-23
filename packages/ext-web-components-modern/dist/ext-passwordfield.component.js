import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Password from './Ext/form/Password.js';
import ElementParser from './ElementParser.js';

var EWCPasswordfield =
/*#__PURE__*/
function (_Ext_form_Password) {
  _inheritsLoose(EWCPasswordfield, _Ext_form_Password);

  function EWCPasswordfield() {
    var _this;

    _this = _Ext_form_Password.call(this, [], []) || this;
    _this.xtype = 'passwordfield';
    return _this;
  }

  return EWCPasswordfield;
}(Ext_form_Password);

export { EWCPasswordfield as default };

try {
  window.customElements.define('ext-passwordfield', ElementParser.withParsedCallback(EWCPasswordfield));
} catch (e) {
  window.customElements.define('ext-passwordfield', EWCPasswordfield);
}