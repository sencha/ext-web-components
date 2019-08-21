import Ext_d3_canvas_Canvas_Component from './Ext/d3/canvas/Canvas'

export class ExtD3_canvasComponent extends Ext_d3_canvas_Canvas_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-canvas', ExtD3_canvasComponent);
    });
})();
