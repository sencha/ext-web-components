import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_window_Window from '@sencha/ext-runtime-base/dist/./Ext/window/Window.js';
import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCWindow =
/*#__PURE__*/
function (_Ext_window_Window) {
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
window.customElements.define('ext-window', HTMLParsedElement.withParsedCallback(EWCWindow));