import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import ElementParser from './common/ElementParser.js';

var EWCTooltip = /*#__PURE__*/function (_Ext_tip_ToolTip) {
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

try {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
  }
} catch (e) {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', EWCTooltip);
  }
}