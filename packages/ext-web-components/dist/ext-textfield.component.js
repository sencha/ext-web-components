import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Text from '@sencha/ext-runtime-base/dist/./Ext/form/Text.js';
import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTextfield =
/*#__PURE__*/
function (_Ext_form_Text) {
  _inheritsLoose(EWCTextfield, _Ext_form_Text);

  function EWCTextfield() {
    var _this;

    _this = _Ext_form_Text.call(this, [], []) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return EWCTextfield;
}(Ext_form_Text);

export { EWCTextfield as default };
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(EWCTextfield));