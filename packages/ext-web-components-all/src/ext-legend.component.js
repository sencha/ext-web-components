import Ext_chart_Legend from './Ext/chart/Legend.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtLegend extends Ext_chart_Legend {
    constructor() {
        super ([],[])
        this.xtype = 'legend';
    }
}
window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(ExtLegend))
