import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCheckboxgroupComponent =
/*#__PURE__*/
function (_Ext_field_CheckboxGr) {
  _inheritsLoose(ExtCheckboxgroupComponent, _Ext_field_CheckboxGr);

  function ExtCheckboxgroupComponent() {
    var _this;

    _this = _Ext_field_CheckboxGr.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return ExtCheckboxgroupComponent;
}(Ext_field_CheckboxGroup); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkboxgroup', ExtCheckboxgroupComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(ExtCheckboxgroupComponent));