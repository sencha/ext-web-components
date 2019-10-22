import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGauge extends Ext_ux_Gauge {
    constructor() {
        super ([],[])
        this.xtype = 'gauge';
    }
}
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(ExtGauge))
