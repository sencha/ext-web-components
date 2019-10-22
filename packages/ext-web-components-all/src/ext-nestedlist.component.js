import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtNestedlist extends Ext_NestedList {
    constructor() {
        super ([],[])
        this.xtype = 'nestedlist';
    }
}
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(ExtNestedlist))
