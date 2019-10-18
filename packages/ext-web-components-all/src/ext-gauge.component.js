import Ext_ux_Gauge from './Ext/ux/Gauge.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtGaugeComponent extends Ext_ux_Gauge {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gauge'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gauge', ExtGaugeComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(ExtGaugeComponent))
