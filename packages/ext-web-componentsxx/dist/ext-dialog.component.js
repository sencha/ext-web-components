import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window from './Ext/window/Window';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDialogComponent =
/*#__PURE__*/
function (_Ext_window_Window) {
  _inheritsLoose(ExtDialogComponent, _Ext_window_Window);

  function ExtDialogComponent() {
    var _this;

    _this = _Ext_window_Window.call(this, [], []) || this;
    _this.xtype = 'dialog';
    return _this;
  }

  return ExtDialogComponent;
}(Ext_window_Window); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dialog', ExtDialogComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialogComponent));