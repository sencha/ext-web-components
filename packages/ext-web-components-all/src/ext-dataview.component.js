import Ext_DataView from './Ext/DataView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDataview extends Ext_DataView {
    constructor() {
        super ([],[])
        this.xtype = 'dataview';
    }
}
window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(ExtDataview))
