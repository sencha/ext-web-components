import Ext_sparkline_Bar_Component from './Ext/sparkline/Bar'

export class ExtSparklinebarComponent extends Ext_sparkline_Bar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinebar', ExtSparklinebarComponent);
    });
})();
