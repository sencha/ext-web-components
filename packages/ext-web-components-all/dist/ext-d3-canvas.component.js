import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_canvas =
/*#__PURE__*/
function (_Ext_d3_canvas_Canvas) {
  _inheritsLoose(ExtD3_canvas, _Ext_d3_canvas_Canvas);

  function ExtD3_canvas() {
    var _this;

    _this = _Ext_d3_canvas_Canvas.call(this, [], []) || this;
    _this.xtype = 'd3-canvas';
    return _this;
  }

  return ExtD3_canvas;
}(Ext_d3_canvas_Canvas);

export { ExtD3_canvas as default };
window.customElements.define('ext-d3-canvas', HTMLParsedElement.withParsedCallback(ExtD3_canvas));