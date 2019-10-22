import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinebar extends Ext_sparkline_Bar {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinebar';
    }
}
window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(ExtSparklinebar))
