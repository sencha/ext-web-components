import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtD3_heatmap extends Ext_d3_HeatMap {
    constructor() {
        super ([],[])
        this.xtype = 'd3-heatmap';
    }
}
window.customElements.define('ext-d3-heatmap', HTMLParsedElement.withParsedCallback(ExtD3_heatmap))
