import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtBoundlist extends Ext_dataview_BoundList {
    constructor() {
        super ([],[])
        this.xtype = 'boundlist';
    }
}
window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlist))
