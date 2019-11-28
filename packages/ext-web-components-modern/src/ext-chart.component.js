//import Ext_chart_Chart from '@sencha/ext-runtime-base/dist/./Ext/chart/Chart.js';
import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCChart extends Ext_chart_Chart {
    constructor() {
        super ([], []);
        this.xtype = 'chart';
    }

}
window.customElements.define('ext-chart', HTMLParsedElement.withParsedCallback(EWCChart));

