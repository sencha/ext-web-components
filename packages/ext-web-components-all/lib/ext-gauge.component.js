import Ext_ux_Gauge_Component from './Ext/ux/Gauge'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGaugeComponent extends Ext_ux_Gauge_Component {
    constructor() {
        super ()
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
