import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel from './Ext/Panel.js';
import ElementParser from './ElementParser.js';

var EWCPanel =
/*#__PURE__*/
function (_Ext_Panel) {
  _inheritsLoose(EWCPanel, _Ext_Panel);

  function EWCPanel() {
    var _this;

    _this = _Ext_Panel.call(this, [], []) || this;
    _this.xtype = 'panel';
    return _this;
  }

  return EWCPanel;
}(Ext_Panel);

export { EWCPanel as default };
window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));