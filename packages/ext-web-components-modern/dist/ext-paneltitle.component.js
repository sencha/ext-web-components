import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPaneltitle = /*#__PURE__*/function (_Ext_panel_Title) {
  _inheritsLoose(EWCPaneltitle, _Ext_panel_Title);

  function EWCPaneltitle() {
    var _this;

    _this = _Ext_panel_Title.call(this, [], []) || this;
    _this.xtype = 'paneltitle';
    return _this;
  }

  return EWCPaneltitle;
}(Ext_panel_Title);

export { EWCPaneltitle as default };

try {
  window.customElements.define('ext-paneltitle', ElementParser.withParsedCallback(EWCPaneltitle));
} catch (e) {
  window.customElements.define('ext-paneltitle', EWCPaneltitle);
}