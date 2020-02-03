import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import ElementParser from './ElementParser.js';

export default class EWCD3_canvas extends Ext_d3_canvas_Canvas {
  constructor() {
    super ([], []);
    this.xtype = 'd3-canvas';
  }
}
try {
  window.customElements.define('ext-d3-canvas', ElementParser.withParsedCallback(EWCD3_canvas));
}
catch(e) {
  window.customElements.define('ext-d3-canvas', EWCD3_canvas);
}
