import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtD3_canvasComponent extends Ext_d3_canvas_Canvas {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-canvas'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-canvas', ExtD3_canvasComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-canvas', HTMLParsedElement.withParsedCallback(ExtD3_canvasComponent))
