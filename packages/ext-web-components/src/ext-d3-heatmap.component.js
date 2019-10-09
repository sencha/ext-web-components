import Ext_d3_HeatMap from './Ext/d3/HeatMap'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_heatmapComponent extends Ext_d3_HeatMap {
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
//        window.customElements.define('ext-d3-heatmap', ExtD3_heatmapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-heatmap', HTMLParsedElement.withParsedCallback(ExtD3_heatmapComponent))
