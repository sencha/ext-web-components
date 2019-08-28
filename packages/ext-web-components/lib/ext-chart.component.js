import Ext_chart_Chart_Component from './Ext/chart/Chart'

export class ExtChartComponent extends Ext_chart_Chart_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-chart', ExtChartComponent);
    });
})();
