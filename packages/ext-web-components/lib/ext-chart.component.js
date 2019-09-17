import Ext_chart_Chart_Component from './Ext/chart/Chart'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtChartComponent extends Ext_chart_Chart_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'chart'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chart', ExtChartComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chart', HTMLParsedElement.withParsedCallback(ExtChartComponent))
