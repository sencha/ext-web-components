import Ext_Indicator from './Ext/Indicator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtIndicator extends Ext_Indicator {
    constructor() {
        super ([],[])
        this.xtype = 'indicator';
    }
}
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(ExtIndicator))
