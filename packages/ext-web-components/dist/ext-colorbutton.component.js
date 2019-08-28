import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Button_Component from './Ext/ux/colorpick/Button';
export var ExtColorbuttonComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_But) {
  _inheritsLoose(ExtColorbuttonComponent, _Ext_ux_colorpick_But);

  function ExtColorbuttonComponent() {
    return _Ext_ux_colorpick_But.call(this, '', '', {}, '') || this;
  }

  return ExtColorbuttonComponent;
}(Ext_ux_colorpick_Button_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-colorbutton', ExtColorbuttonComponent);
  });
})();