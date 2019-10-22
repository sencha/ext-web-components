import Ext_Mask from './Ext/Mask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMask extends Ext_Mask {
    constructor() {
        super ([],[])
        this.xtype = 'mask';
    }
}
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMask))
