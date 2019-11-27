//import Ext_chart_Chart from '@sencha/ext-runtime-base/dist/./Ext/chart/Chart.js';
import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCartesian extends Ext_chart_Chart {
    constructor() {
        super ([], []);
        this.xtype = 'cartesian';
    }

}
window.customElements.define('ext-cartesian', HTMLParsedElement.withParsedCallback(EWCCartesian));

