import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTooltipComponent =
/*#__PURE__*/
function (_Ext_tip_ToolTip) {
  _inheritsLoose(ExtTooltipComponent, _Ext_tip_ToolTip);

  function ExtTooltipComponent() {
    var _this;

    _this = _Ext_tip_ToolTip.call(this, [], []) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return ExtTooltipComponent;
}(Ext_tip_ToolTip); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tooltip', ExtTooltipComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltipComponent));