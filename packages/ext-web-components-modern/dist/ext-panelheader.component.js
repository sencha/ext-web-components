import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPanelheader = /*#__PURE__*/function (_Ext_panel_Header) {
  _inheritsLoose(EWCPanelheader, _Ext_panel_Header);

  function EWCPanelheader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'panelheader';
    return _this;
  }

  return EWCPanelheader;
}(Ext_panel_Header);

export { EWCPanelheader as default };

try {
  window.customElements.define('ext-panelheader', ElementParser.withParsedCallback(EWCPanelheader));
} catch (e) {
  window.customElements.define('ext-panelheader', EWCPanelheader);
}