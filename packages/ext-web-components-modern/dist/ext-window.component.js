import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window from './Ext/window/Window.js';
import ElementParser from './runtime/ElementParser.js';

var EWCWindow = /*#__PURE__*/function (_Ext_window_Window) {
  _inheritsLoose(EWCWindow, _Ext_window_Window);

  function EWCWindow() {
    var _this;

    _this = _Ext_window_Window.call(this, [], []) || this;
    _this.xtype = 'window';
    return _this;
  }

  return EWCWindow;
}(Ext_window_Window);

export { EWCWindow as default };

try {
  window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
} catch (e) {
  window.customElements.define('ext-window', EWCWindow);
}