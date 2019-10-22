import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklineline extends Ext_sparkline_Line {
    constructor() {
        super ([],[])
        this.xtype = 'sparklineline';
    }
}
window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklineline))
