import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinebox extends Ext_sparkline_Box {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinebox';
    }
}
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklinebox))
