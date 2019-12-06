import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Password from '@sencha/ext-runtime-base/dist/./Ext/form/Password.js';
import Ext_form_Password from './Ext/form/Password.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-passwordfield', HTMLParsedElement.withParsedCallback(EWCPasswordfield));