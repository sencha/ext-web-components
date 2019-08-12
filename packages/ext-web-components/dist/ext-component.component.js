import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from './Ext/Gadget';
export var ExtComponentComponent =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(ExtComponentComponent, _Ext_Gadget_Component);

  function ExtComponentComponent() {
    return _Ext_Gadget_Component.call(this, '', '', {}, '') || this;
  }

  return ExtComponentComponent;
}(Ext_Gadget_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-component', ExtComponentComponent);
  });
})();