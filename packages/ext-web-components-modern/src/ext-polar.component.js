//import Ext_chart_PolarChart from '@sencha/ext-runtime-base/dist/./Ext/chart/PolarChart.js';
import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPolar extends Ext_chart_PolarChart {
    constructor() {
        super ([], []);
        this.xtype = 'polar';
    }

}
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(EWCPolar));

