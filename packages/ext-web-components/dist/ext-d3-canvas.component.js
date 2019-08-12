import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_canvas_Canvas_Component from './Ext/d3/canvas/Canvas';
export var ExtD3_canvasComponent =
/*#__PURE__*/
function (_Ext_d3_canvas_Canvas) {
  _inheritsLoose(ExtD3_canvasComponent, _Ext_d3_canvas_Canvas);

  function ExtD3_canvasComponent() {
    return _Ext_d3_canvas_Canvas.call(this, '', '', {}, '') || this;
  }

  return ExtD3_canvasComponent;
}(Ext_d3_canvas_Canvas_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-canvas', ExtD3_canvasComponent);
  });
})();