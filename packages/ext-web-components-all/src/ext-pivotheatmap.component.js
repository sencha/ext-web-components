import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotheatmap extends Ext_pivot_d3_HeatMap {
    constructor() {
        super ([],[])
        this.xtype = 'pivotheatmap';
    }
}
window.customElements.define('ext-pivotheatmap', HTMLParsedElement.withParsedCallback(ExtPivotheatmap))
