import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinepie extends Ext_sparkline_Pie {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinepie';
    }
}
window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepie))
