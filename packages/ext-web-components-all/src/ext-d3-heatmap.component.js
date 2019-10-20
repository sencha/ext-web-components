import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtD3_heatmap extends Ext_d3_HeatMap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-heatmap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-heatmap', ExtD3_heatmap);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-heatmap', HTMLParsedElement.withParsedCallback(ExtD3_heatmap))
//export default reactify(ExtD3_heatmap);