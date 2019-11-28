import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Checkbox from '@sencha/ext-runtime-base/dist/./Ext/form/Checkbox.js';
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCheckboxfield =
/*#__PURE__*/
function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckboxfield, _Ext_form_Checkbox);

  function EWCCheckboxfield() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkboxfield';
    return _this;
  }

  return EWCCheckboxfield;
}(Ext_form_Checkbox);

export { EWCCheckboxfield as default };
window.customElements.define('ext-checkboxfield', HTMLParsedElement.withParsedCallback(EWCCheckboxfield));