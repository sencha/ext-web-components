import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import ElementParser from './ElementParser.js';

export default class EWCD3_canvas extends Ext_d3_canvas_Canvas {
  constructor() {
    super ([], []);
    this.xtype = 'd3-canvas';
  }
}
window.customElements.define('ext-d3-canvas', ElementParser.withParsedCallback(EWCD3_canvas));
