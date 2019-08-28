import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window_Component from './Ext/window/Window';
export var ExtDialogComponent =
/*#__PURE__*/
function (_Ext_window_Window_Co) {
  _inheritsLoose(ExtDialogComponent, _Ext_window_Window_Co);

  function ExtDialogComponent() {
    return _Ext_window_Window_Co.call(this, '', '', {}, '') || this;
  }

  return ExtDialogComponent;
}(Ext_window_Window_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-dialog', ExtDialogComponent);
  });
})();