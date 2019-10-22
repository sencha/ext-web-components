import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparkline extends Ext_sparkline_Base {
    constructor() {
        super ([],[])
        this.xtype = 'sparkline';
    }
}
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(ExtSparkline))
