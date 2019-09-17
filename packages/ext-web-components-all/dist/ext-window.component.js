import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window_Component from './Ext/window/Window';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtWindowComponent =
/*#__PURE__*/
function (_Ext_window_Window_Co) {
  _inheritsLoose(ExtWindowComponent, _Ext_window_Window_Co);

  function ExtWindowComponent() {
    var _this;

    _this = _Ext_window_Window_Co.call(this) || this;
    _this.xtype = 'window';
    return _this;
  }

  return ExtWindowComponent;
}(Ext_window_Window_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-window', ExtWindowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-window', HTMLParsedElement.withParsedCallback(ExtWindowComponent));