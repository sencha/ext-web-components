import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_RadioGroup_Component from './Ext/field/RadioGroup';
export var ExtRadiogroupComponent =
/*#__PURE__*/
function (_Ext_field_RadioGroup) {
  _inheritsLoose(ExtRadiogroupComponent, _Ext_field_RadioGroup);

  function ExtRadiogroupComponent() {
    return _Ext_field_RadioGroup.call(this, '', '', {}, '') || this;
  }

  return ExtRadiogroupComponent;
}(Ext_field_RadioGroup_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-radiogroup', ExtRadiogroupComponent);
  });
})();