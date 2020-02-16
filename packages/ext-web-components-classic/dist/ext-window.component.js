import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Window from './Ext/Window.js';
import ElementParser from './runtime/ElementParser.js';

var EWCWindow =
/*#__PURE__*/
function (_Ext_Window) {
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
  window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
} catch (e) {
  window.customElements.define('ext-window', EWCWindow);
}