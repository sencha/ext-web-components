import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './ElementParser.js';

var EWCPaneltool =
/*#__PURE__*/
function (_Ext_panel_Tool) {
  _inheritsLoose(EWCPaneltool, _Ext_panel_Tool);

  function EWCPaneltool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'paneltool';
    return _this;
  }

  return EWCPaneltool;
}(Ext_panel_Tool);

export { EWCPaneltool as default };

try {
  window.customElements.define('ext-paneltool', ElementParser.withParsedCallback(EWCPaneltool));
} catch (e) {
  window.customElements.define('ext-paneltool', EWCPaneltool);
}