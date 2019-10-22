import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPolar extends Ext_chart_PolarChart {
    constructor() {
        super ([],[])
        this.xtype = 'polar';
    }
}
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(ExtPolar))
