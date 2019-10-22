import Ext_Chip from './Ext/Chip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtChip extends Ext_Chip {
    constructor() {
        super ([],[])
        this.xtype = 'chip';
    }
}
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChip))
