//import Ext_chart_navigator_Container from '@sencha/ext-runtime-base/dist/./Ext/chart/navigator/Container.js';
import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCChartnavigator extends Ext_chart_navigator_Container {
    constructor() {
        super ([], []);
        this.xtype = 'chartnavigator';
    }

}
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(EWCChartnavigator));

