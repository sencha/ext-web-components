import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtD3_canvas extends Ext_d3_canvas_Canvas {
    constructor() {
        super ([],[])
        this.xtype = 'd3-canvas';
    }
}
window.customElements.define('ext-d3-canvas', HTMLParsedElement.withParsedCallback(ExtD3_canvas))
