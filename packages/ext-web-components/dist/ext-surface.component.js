import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface_Component from './Ext/draw/Surface';
export var ExtSurfaceComponent =
/*#__PURE__*/
function (_Ext_draw_Surface_Com) {
  _inheritsLoose(ExtSurfaceComponent, _Ext_draw_Surface_Com);

  function ExtSurfaceComponent() {
    return _Ext_draw_Surface_Com.call(this, '', '', {}, '') || this;
  }

  return ExtSurfaceComponent;
}(Ext_draw_Surface_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-surface', ExtSurfaceComponent);
  });
})();