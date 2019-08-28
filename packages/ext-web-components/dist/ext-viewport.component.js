import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default_Component from './Ext/viewport/Default';
export var ExtViewportComponent =
/*#__PURE__*/
function (_Ext_viewport_Default) {
  _inheritsLoose(ExtViewportComponent, _Ext_viewport_Default);

  function ExtViewportComponent() {
    return _Ext_viewport_Default.call(this, '', '', {}, '') || this;
  }

  return ExtViewportComponent;
}(Ext_viewport_Default_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-viewport', ExtViewportComponent);
  });
})();