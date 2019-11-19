import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_field_CheckboxGroup from '@sencha/ext-runtime-base/dist/./Ext/field/CheckboxGroup.js';
import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCheckboxgroup =
/*#__PURE__*/
function (_Ext_field_CheckboxGr) {
  _inheritsLoose(EWCCheckboxgroup, _Ext_field_CheckboxGr);

  function EWCCheckboxgroup() {
    var _this;

    _this = _Ext_field_CheckboxGr.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return EWCCheckboxgroup;
}(Ext_field_CheckboxGroup);

export { EWCCheckboxgroup as default };
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(EWCCheckboxgroup));