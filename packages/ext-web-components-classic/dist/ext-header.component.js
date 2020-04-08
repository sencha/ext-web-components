import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './common/ElementParser.js';

var EWCHeader = /*#__PURE__*/function (_Ext_panel_Header) {
  _inheritsLoose(EWCHeader, _Ext_panel_Header);

  function EWCHeader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'header';
    return _this;
  }

  return EWCHeader;
}(Ext_panel_Header);

export { EWCHeader as default };

try {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));
  }
} catch (e) {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', EWCHeader);
  }
}