import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar from './Ext/TitleBar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTitlebar = /*#__PURE__*/function (_Ext_TitleBar) {
  _inheritsLoose(EWCTitlebar, _Ext_TitleBar);

  function EWCTitlebar() {
    var _this;

    _this = _Ext_TitleBar.call(this, [], []) || this;
    _this.xtype = 'titlebar';
    return _this;
  }

  return EWCTitlebar;
}(Ext_TitleBar);

export { EWCTitlebar as default };

try {
  window.customElements.define('ext-titlebar', ElementParser.withParsedCallback(EWCTitlebar));
} catch (e) {
  window.customElements.define('ext-titlebar', EWCTitlebar);
}