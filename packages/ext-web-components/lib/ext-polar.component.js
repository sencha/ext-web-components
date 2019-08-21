import Ext_chart_PolarChart_Component from './Ext/chart/PolarChart'

export class ExtPolarComponent extends Ext_chart_PolarChart_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-polar', ExtPolarComponent);
    });
})();
