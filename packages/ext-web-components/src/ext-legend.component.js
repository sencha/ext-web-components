//import Ext_chart_Legend from '@sencha/ext-runtime-base/dist/./Ext/chart/Legend.js';
import Ext_chart_Legend from './Ext/chart/Legend.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCLegend extends Ext_chart_Legend {
    constructor() {
        super ([], []);
        this.xtype = 'legend';
    }

}
window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(EWCLegend));

