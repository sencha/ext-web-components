import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer_Component from './Ext/field/FieldGroupContainer';
export var ExtGroupcontainerComponent =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(ExtGroupcontainerComponent, _Ext_field_FieldGroup);

  function ExtGroupcontainerComponent() {
    return _Ext_field_FieldGroup.call(this, '', '', {}, '') || this;
  }

  return ExtGroupcontainerComponent;
}(Ext_field_FieldGroupContainer_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-groupcontainer', ExtGroupcontainerComponent);
  });
})();