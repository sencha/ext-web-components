import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSparklinediscreteComponent extends Ext_sparkline_Discrete {
    constructor() {
        super (
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
