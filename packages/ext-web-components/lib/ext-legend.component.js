import Ext_chart_Legend_Component from './Ext/chart/Legend'

export class ExtLegendComponent extends Ext_chart_Legend_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-legend', ExtLegendComponent);
    });
})();
