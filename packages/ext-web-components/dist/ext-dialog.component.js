import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_window_Window from '@sencha/ext-runtime-base/dist/./Ext/window/Window.js';
import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDialog =
/*#__PURE__*/
function (_Ext_window_Window) {
  _inheritsLoose(EWCDialog, _Ext_window_Window);

  function EWCDialog() {
    var _this;

    _this = _Ext_window_Window.call(this, [], []) || this;
    _this.xtype = 'dialog';
    return _this;
  }

  return EWCDialog;
}(Ext_window_Window);

export { EWCDialog as default };
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(EWCDialog));