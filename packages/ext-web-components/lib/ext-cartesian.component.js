import Ext_chart_Chart_Component from './Ext/chart/Chart'

export class ExtCartesianComponent extends Ext_chart_Chart_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-cartesian', ExtCartesianComponent);
    });
})();
