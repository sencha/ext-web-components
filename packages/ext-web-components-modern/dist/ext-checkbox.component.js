import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Checkbox from '@sencha/ext-runtime-base/dist/./Ext/form/Checkbox.js';
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCheckbox =
/*#__PURE__*/
function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckbox, _Ext_form_Checkbox);

  function EWCCheckbox() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkbox';
    return _this;
  }

  return EWCCheckbox;
}(Ext_form_Checkbox);

export { EWCCheckbox as default };
window.customElements.define('ext-checkbox', HTMLParsedElement.withParsedCallback(EWCCheckbox));