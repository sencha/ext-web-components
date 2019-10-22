import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtEmptytext extends Ext_dataview_EmptyText {
    constructor() {
        super ([],[])
        this.xtype = 'emptytext';
    }
}
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(ExtEmptytext))
