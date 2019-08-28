import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip_Component from './Ext/tip/ToolTip';
export var ExtTooltipComponent =
/*#__PURE__*/
function (_Ext_tip_ToolTip_Comp) {
  _inheritsLoose(ExtTooltipComponent, _Ext_tip_ToolTip_Comp);

  function ExtTooltipComponent() {
    return _Ext_tip_ToolTip_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtTooltipComponent;
}(Ext_tip_ToolTip_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tooltip', ExtTooltipComponent);
  });
})();