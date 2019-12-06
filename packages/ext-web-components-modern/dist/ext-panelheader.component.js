import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_panel_Header from '@sencha/ext-runtime-base/dist/./Ext/panel/Header.js';
import Ext_panel_Header from './Ext/panel/Header.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPanelheader =
/*#__PURE__*/
function (_Ext_panel_Header) {
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
window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(EWCPanelheader));