import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_tip_ToolTip from '@sencha/ext-runtime-base/dist/./Ext/tip/ToolTip.js';
import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTooltip =
/*#__PURE__*/
function (_Ext_tip_ToolTip) {
  _inheritsLoose(EWCTooltip, _Ext_tip_ToolTip);

  function EWCTooltip() {
    var _this;

    _this = _Ext_tip_ToolTip.call(this, [], []) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return EWCTooltip;
}(Ext_tip_ToolTip);

export { EWCTooltip as default };
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(EWCTooltip));