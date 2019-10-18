import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotheatmapComponent extends Ext_pivot_d3_HeatMap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotheatmap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotheatmap', ExtPivotheatmapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotheatmap', HTMLParsedElement.withParsedCallback(ExtPivotheatmapComponent))
