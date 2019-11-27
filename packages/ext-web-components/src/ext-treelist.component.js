//import Ext_list_Tree from '@sencha/ext-runtime-base/dist/./Ext/list/Tree.js';
import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTreelist extends Ext_list_Tree {
    constructor() {
        super ([], []);
        this.xtype = 'treelist';
    }

}
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(EWCTreelist));

