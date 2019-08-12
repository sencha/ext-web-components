import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask_Component from './Ext/Mask';
export var ExtMaskComponent =
/*#__PURE__*/
function (_Ext_Mask_Component) {
  _inheritsLoose(ExtMaskComponent, _Ext_Mask_Component);

  function ExtMaskComponent() {
    return _Ext_Mask_Component.call(this, '', '', {}, '') || this;
  }

  return ExtMaskComponent;
}(Ext_Mask_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-mask', ExtMaskComponent);
  });
})();