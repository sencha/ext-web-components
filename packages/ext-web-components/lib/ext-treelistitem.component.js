import Ext_list_TreeItem_Component from './Ext/list/TreeItem'

export class ExtTreelistitemComponent extends Ext_list_TreeItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-treelistitem', ExtTreelistitemComponent);
    });
})();
