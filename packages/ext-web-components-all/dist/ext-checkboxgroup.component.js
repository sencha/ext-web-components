import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCheckboxgroup =
/*#__PURE__*/
function (_Ext_field_CheckboxGr) {
  _inheritsLoose(ExtCheckboxgroup, _Ext_field_CheckboxGr);

  function ExtCheckboxgroup() {
    var _this;

    _this = _Ext_field_CheckboxGr.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return ExtCheckboxgroup;
}(Ext_field_CheckboxGroup);

export { ExtCheckboxgroup as default };
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(ExtCheckboxgroup));