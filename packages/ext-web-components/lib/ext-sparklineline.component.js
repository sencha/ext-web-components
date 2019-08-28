import Ext_sparkline_Line_Component from './Ext/sparkline/Line'

export class ExtSparklinelineComponent extends Ext_sparkline_Line_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklineline', ExtSparklinelineComponent);
    });
})();
