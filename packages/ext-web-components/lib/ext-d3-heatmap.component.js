import Ext_d3_HeatMap_Component from './Ext/d3/HeatMap'

export class ExtD3_heatmapComponent extends Ext_d3_HeatMap_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-heatmap', ExtD3_heatmapComponent);
    });
})();
