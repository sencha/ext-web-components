import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_StatusBar from './Ext/ux/StatusBar.js';
import ElementParser from './common/ElementParser.js';

var EWCStatusbar = /*#__PURE__*/function (_Ext_ux_StatusBar) {
  _inheritsLoose(EWCStatusbar, _Ext_ux_StatusBar);

  function EWCStatusbar() {
    var _this;

    _this = _Ext_ux_StatusBar.call(this, [], []) || this;
    _this.xtype = 'statusbar';
    return _this;
  }

  return EWCStatusbar;
}(Ext_ux_StatusBar);

export { EWCStatusbar as default };

try {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', ElementParser.withParsedCallback(EWCStatusbar));
  }
} catch (e) {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', EWCStatusbar);
  }
}