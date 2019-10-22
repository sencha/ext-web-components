import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtChartnavigator extends Ext_chart_navigator_Container {
    constructor() {
        super ([],[])
        this.xtype = 'chartnavigator';
    }
}
window.customElements.define('ext-chartnavigator', HTMLParsedElement.withParsedCallback(ExtChartnavigator))
