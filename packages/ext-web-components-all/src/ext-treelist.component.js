import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTreelist extends Ext_list_Tree {
    constructor() {
        super ([],[])
        this.xtype = 'treelist';
    }
}
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelist))
