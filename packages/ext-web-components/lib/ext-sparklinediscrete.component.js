import Ext_sparkline_Discrete_Component from './Ext/sparkline/Discrete'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinediscreteComponent extends Ext_sparkline_Discrete_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'sparklinediscrete'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscreteComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscreteComponent))
