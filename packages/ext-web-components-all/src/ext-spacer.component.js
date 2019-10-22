import Ext_Spacer from './Ext/Spacer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSpacer extends Ext_Spacer {
    constructor() {
        super ([],[])
        this.xtype = 'spacer';
    }
}
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(ExtSpacer))
