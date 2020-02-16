import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Explorer from './Ext/ux/Explorer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCExplorer =
/*#__PURE__*/
function (_Ext_ux_Explorer) {
  _inheritsLoose(EWCExplorer, _Ext_ux_Explorer);

  function EWCExplorer() {
    var _this;

    _this = _Ext_ux_Explorer.call(this, [], []) || this;
    _this.xtype = 'explorer';
    return _this;
  }

  return EWCExplorer;
}(Ext_ux_Explorer);

export { EWCExplorer as default };

try {
  window.customElements.define('ext-explorer', ElementParser.withParsedCallback(EWCExplorer));
} catch (e) {
  window.customElements.define('ext-explorer', EWCExplorer);
}