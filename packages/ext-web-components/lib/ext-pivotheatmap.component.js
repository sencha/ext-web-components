import Ext_pivot_d3_HeatMap_Component from './Ext/pivot/d3/HeatMap'

export class ExtPivotheatmapComponent extends Ext_pivot_d3_HeatMap_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotheatmap', ExtPivotheatmapComponent);
    });
})();
