import Ext_list_Tree_Component from './Ext/list/Tree'

export class ExtTreelistComponent extends Ext_list_Tree_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-treelist', ExtTreelistComponent);
    });
})();
