import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Component_Component from './Ext/draw/Component';
export var ExtDrawComponent =
/*#__PURE__*/
function (_Ext_draw_Component_C) {
  _inheritsLoose(ExtDrawComponent, _Ext_draw_Component_C);

  function ExtDrawComponent() {
    return _Ext_draw_Component_C.call(this, '', '', {}, '') || this;
  }

  return ExtDrawComponent;
}(Ext_draw_Component_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-draw', ExtDrawComponent);
  });
})();