import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtD3_canvas extends Ext_d3_canvas_Canvas {
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
//        window.customElements.define('ext-d3-canvas', ExtD3_canvas);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-canvas', HTMLParsedElement.withParsedCallback(ExtD3_canvas))
//export default reactify(ExtD3_canvas);