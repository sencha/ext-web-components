import Ext_pivot_d3_HeatMap_Component from './Ext/pivot/d3/HeatMap'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotheatmapComponent extends Ext_pivot_d3_HeatMap_Component {
    constructor() {
        super (
            {},
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
