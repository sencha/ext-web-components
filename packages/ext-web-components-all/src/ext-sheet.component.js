import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSheet extends Ext_Sheet {
    constructor() {
        super ([],[])
        this.xtype = 'sheet';
    }
}
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheet))
