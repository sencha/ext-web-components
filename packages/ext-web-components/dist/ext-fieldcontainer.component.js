import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container_Component from './Ext/field/Container';
export var ExtFieldcontainerComponent =
/*#__PURE__*/
function (_Ext_field_Container_) {
  _inheritsLoose(ExtFieldcontainerComponent, _Ext_field_Container_);

  function ExtFieldcontainerComponent() {
    return _Ext_field_Container_.call(this, '', '', {}, '') || this;
  }

  return ExtFieldcontainerComponent;
}(Ext_field_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-fieldcontainer', ExtFieldcontainerComponent);
  });
})();