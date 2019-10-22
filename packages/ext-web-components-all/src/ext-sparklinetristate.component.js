import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinetristate extends Ext_sparkline_TriState {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinetristate';
    }
}
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(ExtSparklinetristate))
