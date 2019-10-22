import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCartesian extends Ext_chart_Chart {
    constructor() {
        super ([],[])
        this.xtype = 'cartesian';
    }
}
window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(ExtCartesian))
