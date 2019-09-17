import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window_Component from './Ext/window/Window';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDialogComponent =
/*#__PURE__*/
function (_Ext_window_Window_Co) {
  _inheritsLoose(ExtDialogComponent, _Ext_window_Window_Co);

  function ExtDialogComponent() {
    var _this;

    _this = _Ext_window_Window_Co.call(this, {}, [], []) || this;
    _this.xtype = 'dialog';
    return _this;
  }

  return ExtDialogComponent;
}(Ext_window_Window_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dialog', ExtDialogComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialogComponent));