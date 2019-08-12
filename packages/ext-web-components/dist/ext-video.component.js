import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Video_Component from './Ext/Video';
export var ExtVideoComponent =
/*#__PURE__*/
function (_Ext_Video_Component) {
  _inheritsLoose(ExtVideoComponent, _Ext_Video_Component);

  function ExtVideoComponent() {
    return _Ext_Video_Component.call(this, '', '', {}, '') || this;
  }

  return ExtVideoComponent;
}(Ext_Video_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-video', ExtVideoComponent);
  });
})();