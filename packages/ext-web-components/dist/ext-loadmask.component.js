import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_LoadMask_Component from './Ext/LoadMask';
export var ExtLoadmaskComponent =
/*#__PURE__*/
function (_Ext_LoadMask_Compone) {
  _inheritsLoose(ExtLoadmaskComponent, _Ext_LoadMask_Compone);

  function ExtLoadmaskComponent() {
    return _Ext_LoadMask_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtLoadmaskComponent;
}(Ext_LoadMask_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-loadmask', ExtLoadmaskComponent);
  });
})();