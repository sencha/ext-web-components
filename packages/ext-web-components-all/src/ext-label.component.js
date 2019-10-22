import Ext_Label from './Ext/Label.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtLabel extends Ext_Label {
    constructor() {
        super ([],[])
        this.xtype = 'label';
    }
}
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabel))
