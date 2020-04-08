import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Window from './Ext/Window.js';
import ElementParser from './common/ElementParser.js';

var EWCWindow = /*#__PURE__*/function (_Ext_Window) {
  _inheritsLoose(EWCWindow, _Ext_Window);

  function EWCWindow() {
    var _this;

    _this = _Ext_Window.call(this, [], []) || this;
    _this.xtype = 'window';
    return _this;
  }

  return EWCWindow;
}(Ext_Window);

export { EWCWindow as default };

try {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
  }
} catch (e) {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', EWCWindow);
  }
}