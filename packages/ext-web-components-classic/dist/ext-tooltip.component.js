import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ToolTip from './Ext/ToolTip.js';
import ElementParser from './ElementParser.js';

var EWCTooltip =
/*#__PURE__*/
function (_Ext_ToolTip) {
  _inheritsLoose(EWCTooltip, _Ext_ToolTip);

  function EWCTooltip() {
    var _this;

    _this = _Ext_ToolTip.call(this, [], []) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return EWCTooltip;
}(Ext_ToolTip);

export { EWCTooltip as default };
window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));