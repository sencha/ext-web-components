import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Field_Component from './Ext/ux/colorpick/Field';
export var ExtColorfieldComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(ExtColorfieldComponent, _Ext_ux_colorpick_Fie);

  function ExtColorfieldComponent() {
    return _Ext_ux_colorpick_Fie.call(this, '', '', {}, '') || this;
  }

  return ExtColorfieldComponent;
}(Ext_ux_colorpick_Field_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-colorfield', ExtColorfieldComponent);
  });
})();