import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_canvas_Canvas_Component from './Ext/d3/canvas/Canvas';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_canvasComponent =
/*#__PURE__*/
function (_Ext_d3_canvas_Canvas) {
  _inheritsLoose(ExtD3_canvasComponent, _Ext_d3_canvas_Canvas);

  function ExtD3_canvasComponent() {
    var _this;

    _this = _Ext_d3_canvas_Canvas.call(this) || this;
    _this.xtype = 'd3-canvas';
    return _this;
  }

  return ExtD3_canvasComponent;
}(Ext_d3_canvas_Canvas_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-canvas', ExtD3_canvasComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-canvas', HTMLParsedElement.withParsedCallback(ExtD3_canvasComponent));