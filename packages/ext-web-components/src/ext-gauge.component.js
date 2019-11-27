//import Ext_ux_Gauge from '@sencha/ext-runtime-base/dist/./Ext/ux/Gauge.js';
import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGauge extends Ext_ux_Gauge {
    constructor() {
        super ([], []);
        this.xtype = 'gauge';
    }

}
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(EWCGauge));

