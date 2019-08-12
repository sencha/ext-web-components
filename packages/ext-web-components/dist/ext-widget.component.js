import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from './Ext/Gadget';
export var ExtWidgetComponent =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(ExtWidgetComponent, _Ext_Gadget_Component);

  function ExtWidgetComponent() {
    return _Ext_Gadget_Component.call(this, '', '', {}, '') || this;
  }

  return ExtWidgetComponent;
}(Ext_Gadget_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-widget', ExtWidgetComponent);
  });
})();