import Ext_chart_navigator_Container_Component from './Ext/chart/navigator/Container'

export class ExtChartnavigatorComponent extends Ext_chart_navigator_Container_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-chartnavigator', ExtChartnavigatorComponent);
    });
})();
