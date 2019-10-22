import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinediscrete extends Ext_sparkline_Discrete {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinediscrete';
    }
}
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscrete))
