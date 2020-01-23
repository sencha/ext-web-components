import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import ElementParser from './ElementParser.js';

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

try {
  window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
} catch (e) {
  window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
}