import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_CheckboxGroup_Component from './Ext/field/CheckboxGroup';
export var ExtCheckboxgroupComponent =
/*#__PURE__*/
function (_Ext_field_CheckboxGr) {
  _inheritsLoose(ExtCheckboxgroupComponent, _Ext_field_CheckboxGr);

  function ExtCheckboxgroupComponent() {
    return _Ext_field_CheckboxGr.call(this, '', '', {}, '') || this;
  }

  return ExtCheckboxgroupComponent;
}(Ext_field_CheckboxGroup_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-checkboxgroup', ExtCheckboxgroupComponent);
  });
})();