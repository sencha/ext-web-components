import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window_Component from './Ext/window/Window';
export var ExtWindowComponent =
/*#__PURE__*/
function (_Ext_window_Window_Co) {
  _inheritsLoose(ExtWindowComponent, _Ext_window_Window_Co);

  function ExtWindowComponent() {
    return _Ext_window_Window_Co.call(this, '', '', {}, '') || this;
  }

  return ExtWindowComponent;
}(Ext_window_Window_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-window', ExtWindowComponent);
  });
})();