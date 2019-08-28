import Ext_sparkline_Pie_Component from './Ext/sparkline/Pie'

export class ExtSparklinepieComponent extends Ext_sparkline_Pie_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinepie', ExtSparklinepieComponent);
    });
})();
