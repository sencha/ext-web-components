import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip_Component from './Ext/tip/ToolTip';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTooltipComponent =
/*#__PURE__*/
function (_Ext_tip_ToolTip_Comp) {
  _inheritsLoose(ExtTooltipComponent, _Ext_tip_ToolTip_Comp);

  function ExtTooltipComponent() {
    var _this;

    _this = _Ext_tip_ToolTip_Comp.call(this) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return ExtTooltipComponent;
}(Ext_tip_ToolTip_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tooltip', ExtTooltipComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltipComponent));