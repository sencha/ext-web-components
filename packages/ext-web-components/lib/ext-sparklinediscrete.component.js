import Ext_sparkline_Discrete_Component from './Ext/sparkline/Discrete'

export class ExtSparklinediscreteComponent extends Ext_sparkline_Discrete_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscreteComponent);
    });
})();
