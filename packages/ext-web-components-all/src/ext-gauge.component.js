import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGauge extends Ext_ux_Gauge {
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
//        window.customElements.define('ext-gauge', ExtGauge);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(ExtGauge))
//export default reactify(ExtGauge);